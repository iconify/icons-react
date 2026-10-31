import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u0sdq87xg.css';
import '../../css/p/pp9zcnbub.css';
import '../../css/f/fclxscblq.css';
import '../../css/r/rg1y51_cc.css';
import '../../css/w/wy78m940n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u0sdq87xg wm-shadow"/><path class="pp9zcnbub"/><path class="fclxscblq"/><path class="rg1y51_cc"/><path class="wy78m940n"/></g>`,
		"fallback": "withicons-retro:images",
	});
}

export default Component;
