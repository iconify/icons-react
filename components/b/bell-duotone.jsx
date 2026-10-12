import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssjevybxp.css';
import '../../css/r/rke2g1q2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssjevybxp"/><path class="rke2g1q2t"/></g>`,
		"fallback": "lucide-extended:bell-duotone",
	});
}

export default Component;
