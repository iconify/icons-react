import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isgk0lbhg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isgk0lbhg"/>`,
		"fallback": "pinhead:ice-cream-on-cone",
	});
}

export default Component;
