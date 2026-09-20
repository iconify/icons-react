import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-4s0okmm.css';
import '../../css/u/uiazioixq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-4s0okmm"/><path class="uiazioixq"/></g>`,
		"fallback": "tdesign:city-9",
	});
}

export default Component;
