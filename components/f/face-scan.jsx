import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3i-qdbpg.css';
import '../../css/y/yn436cvro.css';
import '../../css/p/pdf-ob65e.css';
import '../../css/w/wsvws5b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3i-qdbpg"/><path class="yn436cvro"/><path class="pdf-ob65e"/><path class="wsvws5b2y"/></g>`,
		"fallback": "andrsrxn:face-scan",
	});
}

export default Component;
