import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny8eibbpn.css';
import '../../css/h/h4qhcub-h.css';
import '../../css/t/t6pjxesdj.css';
import '../../css/w/w3q_ifu_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ny8eibbpn"/><circle transform="rotate(90 12 12)" class="h4qhcub-h"/><ellipse transform="rotate(90 12 12)" class="t6pjxesdj"/><path class="w3q_ifu_l"/></g>`,
		"fallback": "andrsrxn:globe",
	});
}

export default Component;
