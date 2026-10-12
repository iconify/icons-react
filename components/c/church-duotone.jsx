import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qoe1ehbas.css';
import '../../css/s/s4pl42bvj.css';
import '../../css/l/lwkmjtx7o.css';
import '../../css/o/ovxylj__k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qoe1ehbas"/><path class="s4pl42bvj"/><path class="lwkmjtx7o"/><path class="ovxylj__k"/></g>`,
		"fallback": "lucide-extended:church-duotone",
	});
}

export default Component;
