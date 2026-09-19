import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe09umb-g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe09umb-g"/>`,
		"fallback": "glyphs:bars-offset-1-bold",
	});
}

export default Component;
