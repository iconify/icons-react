import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftft7buul.css';
import '../../css/o/oanow-b1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftft7buul"/><path class="oanow-b1b"/>`,
		"fallback": "energy-icons:bed-48",
	});
}

export default Component;
