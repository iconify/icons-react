import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/y/y8s8fjbvt.css';
import '../../css/v/vw00f9npq.css';
import '../../css/w/wvz-r_bdu.css';
import '../../css/g/go1_ue0zb.css';
import '../../css/b/bdq94vb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path class="y8s8fjbvt"/><path class="vw00f9npq"/><path class="wvz-r_bdu"/><path class="go1_ue0zb"/><path class="bdq94vb3p"/></g>`,
		"fallback": "iconoir:frame",
	});
}

export default Component;
