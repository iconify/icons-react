import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2nwjacxb.css';
import '../../css/n/n2-vjlbye.css';
import '../../css/k/kyuqe4bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2nwjacxb wm-k"/><path class="n2-vjlbye wm-shine"/><path class="kyuqe4bdp wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-dog",
	});
}

export default Component;
