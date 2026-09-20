import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffoov4y2y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffoov4y2y"/>`,
		"fallback": "pinhead:five-above-water",
	});
}

export default Component;
