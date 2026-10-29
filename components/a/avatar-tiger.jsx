import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/guip_kb9k.css';
import '../../css/a/avzr3zdfo.css';
import '../../css/g/g5qm_rbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="guip_kb9k"/><path class="avzr3zdfo"/><path class="g5qm_rbmh"/></g>`,
		"fallback": "withicons-bauhaus:avatar-tiger",
	});
}

export default Component;
