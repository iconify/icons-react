import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_geh1b4c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/khi7kz-fr.css';
import '../../css/f/fhijb1c4d.css';
import '../../css/x/xdc556bol.css';
import '../../css/h/hfirngbmd.css';
import '../../css/x/xc1ugqj_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_geh1b4c secondary"/><g class="dt0cm9dhy primary"><path class="khi7kz-fr"/><path class="fhijb1c4d"/><path class="xdc556bol"/><path class="hfirngbmd"/><path class="xc1ugqj_g"/></g>`,
		"fallback": "iconaut:gate-xor-duo",
	});
}

export default Component;
