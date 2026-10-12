import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yheb48nef.css';
import '../../css/n/noicztbcn.css';
import '../../css/p/puy-xje_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yheb48nef"/><path class="noicztbcn"/><path class="puy-xje_r"/></g>`,
		"fallback": "lucide-extended:brick-wall-fire-duotone",
	});
}

export default Component;
