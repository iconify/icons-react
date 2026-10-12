import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrg_i4p8l.css';
import '../../css/q/qdxp_rkuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nrg_i4p8l"/><path class="qdxp_rkuk"/></g>`,
		"fallback": "lucide-extended:align-vertical-justify-start-duotone",
	});
}

export default Component;
