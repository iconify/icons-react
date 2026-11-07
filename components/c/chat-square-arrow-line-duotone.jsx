import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzp2vnbza.css';
import '../../css/f/fvf6w1p5c.css';
import '../../css/n/n_45qf4se.css';
import '../../css/x/x-amkeb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zzp2vnbza"/><path class="fvf6w1p5c"/><path class="n_45qf4se"/><path class="x-amkeb7n"/></g>`,
		"fallback": "solar:chat-square-arrow-line-duotone",
	});
}

export default Component;
