import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/z8k3wpjor.css';
import '../../css/e/exv_z3ber.css';
import '../../css/j/jc6szvbud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="z8k3wpjor"/><path class="exv_z3ber"/><path class="jc6szvbud"/></g>`,
		"fallback": "icon-park-solid:green-house",
	});
}

export default Component;
