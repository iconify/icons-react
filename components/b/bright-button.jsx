import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu85lyb9a.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/o-mn23hdo.css';
import '../../css/m/mtmqpmbwb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fu85lyb9a"/><g class="ij2x_72vy"><circle class="o-mn23hdo"/><path class="mtmqpmbwb"/></g>`,
		"fallback": "openmoji:bright-button",
	});
}

export default Component;
