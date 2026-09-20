import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dftf9rvck.css';
import '../../css/o/oiq_rmbym.css';
import '../../css/f/f8mguzaok.css';
import '../../css/k/kx65r1-1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dftf9rvck"/><path class="oiq_rmbym"/><path class="f8mguzaok"/><path class="kx65r1-1e"/></g>`,
		"fallback": "lets-icons:atom-light",
	});
}

export default Component;
