import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jml1hcbns.css';
import '../../css/n/nw15yoexv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jml1hcbns"/><path class="nw15yoexv"/></g>`,
		"fallback": "lets-icons:arrow-right-long-light",
	});
}

export default Component;
