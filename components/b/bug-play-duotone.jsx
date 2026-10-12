import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofefroz8y.css';
import '../../css/k/k29p_7odf.css';
import '../../css/m/mbk-webhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ofefroz8y"/><path class="k29p_7odf"/><path class="mbk-webhc"/></g>`,
		"fallback": "lucide-extended:bug-play-duotone",
	});
}

export default Component;
