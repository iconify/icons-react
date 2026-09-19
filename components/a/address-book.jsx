import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/ssh2mccsr.css';
import '../../css/s/szcqc6hpb.css';
import '../../css/b/bpuqtn53z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ssh2mccsr"/><path class="szcqc6hpb"/><path class="bpuqtn53z"/></g>`,
		"fallback": "hugeicons:address-book",
	});
}

export default Component;
