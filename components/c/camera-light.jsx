import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zwtw4ybnw.css';
import '../../css/q/q4y4c8bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zwtw4ybnw"/><circle class="q4y4c8bkl"/></g>`,
		"fallback": "lets-icons:camera-light",
	});
}

export default Component;
