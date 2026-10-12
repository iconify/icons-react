import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgln9itcl.css';
import '../../css/q/qrtjb_bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sgln9itcl"/><path class="qrtjb_bgy"/></g>`,
		"fallback": "lucide-extended:cooking-pot-duotone",
	});
}

export default Component;
