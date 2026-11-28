import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tun7kpbmr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/f/f-kk1tocm.css';
import '../../css/v/vmi2_9iax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tun7kpbmr"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="f-kk1tocm"/><path class="vmi2_9iax"/></g>`,
		"fallback": "iconaut:folder-plus-duo",
	});
}

export default Component;
