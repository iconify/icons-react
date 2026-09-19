import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hyg7__beq.css';
import '../../css/c/c8fcm6b_c.css';
import '../../css/i/inwqb0b3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hyg7__beq"/><path class="c8fcm6b_c"/><path class="inwqb0b3n"/></g>`,
		"fallback": "icon-park-outline:hair-clip",
	});
}

export default Component;
