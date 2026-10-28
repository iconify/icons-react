import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny8eibbpn.css';
import '../../css/q/q7jey8bpg.css';
import '../../css/f/fq3ffsbja.css';
import '../../css/z/za4nekbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ny8eibbpn"/><path class="q7jey8bpg"/><path class="fq3ffsbja"/><path class="za4nekbzt"/></g>`,
		"fallback": "andrsrxn:globe-www",
	});
}

export default Component;
