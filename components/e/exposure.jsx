import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krm_rrbhp.css';
import '../../css/q/q1h9w_bpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krm_rrbhp"/><path class="q1h9w_bpz"/>`,
		"fallback": "cil:exposure",
	});
}

export default Component;
