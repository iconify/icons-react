import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ddxm3dqot.css';
import '../../css/f/ft-e_vuvv.css';
import '../../css/p/peve4ubrw.css';
import '../../css/u/utfedrb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ddxm3dqot"/><path class="ft-e_vuvv"/><path class="peve4ubrw"/><path class="utfedrb8y"/></g>`,
		"fallback": "hugeicons:ai-chemistry-03",
	});
}

export default Component;
