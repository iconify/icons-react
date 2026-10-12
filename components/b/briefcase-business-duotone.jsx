import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg05_8bth.css';
import '../../css/g/g0m-uo1ig.css';
import '../../css/q/qp_f2rhnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zg05_8bth"/><path class="g0m-uo1ig"/><path class="qp_f2rhnt"/></g>`,
		"fallback": "lucide-extended:briefcase-business-duotone",
	});
}

export default Component;
