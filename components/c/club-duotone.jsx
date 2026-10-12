import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8s704hzr.css';
import '../../css/a/a_priwvxo.css';
import '../../css/m/mbul8ac9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8s704hzr"/><path class="a_priwvxo"/><path class="mbul8ac9s"/></g>`,
		"fallback": "lucide-extended:club-duotone",
	});
}

export default Component;
