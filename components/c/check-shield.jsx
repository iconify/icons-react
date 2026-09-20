import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-8h0w5qm.css';
import '../../css/e/emzr68bxo.css';
import '../../css/z/z_x67obuj.css';
import '../../css/q/qsjil_boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-8h0w5qm"/><path class="emzr68bxo"/><path class="z_x67obuj"/><path class="qsjil_boq"/></g>`,
		"fallback": "streamline-cyber-color:check-shield",
	});
}

export default Component;
