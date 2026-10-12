import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntalukx4g.css';
import '../../css/u/uz2zlbsii.css';
import '../../css/e/e_kf83boc.css';
import '../../css/a/aeeeoz6sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ntalukx4g"/><path class="uz2zlbsii"/><path class="e_kf83boc"/><path class="aeeeoz6sm"/></g>`,
		"fallback": "lucide-extended:goal-duotone",
	});
}

export default Component;
