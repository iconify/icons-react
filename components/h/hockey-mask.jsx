import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9bnnp-6c.css';
import '../../css/g/gcfr_k89q.css';
import '../../css/j/j_l5n-1bx.css';
import '../../css/o/oi8yi9bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v9bnnp-6c"/><circle class="gcfr_k89q"/><circle class="j_l5n-1bx"/><path class="oi8yi9bsy"/></g>`,
		"fallback": "lucide-lab:hockey-mask",
	});
}

export default Component;
