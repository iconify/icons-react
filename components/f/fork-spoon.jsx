import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7pkn6g-i.css';
import '../../css/m/mkfx32b2a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r7pkn6g-i"/><path class="mkfx32b2a"/></g>`,
		"fallback": "streamline-color:fork-spoon",
	});
}

export default Component;
