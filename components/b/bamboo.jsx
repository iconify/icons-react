import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rmku--bxg.css';
import '../../css/e/em_i-2_kp.css';
import '../../css/u/unv51cu4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rmku--bxg wm-shadow"/><path class="em_i-2_kp wm-shadow"/><path class="unv51cu4z"/></g>`,
		"fallback": "withicons-brutal:bamboo",
	});
}

export default Component;
