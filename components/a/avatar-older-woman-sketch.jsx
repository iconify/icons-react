import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o8xh_lbvg.css';
import '../../css/h/h5hpoq8kp.css';
import '../../css/z/z8twodclj.css';
import '../../css/w/weicl-k-p.css';
import '../../css/r/rwx0oacsc.css';
import '../../css/y/y7dx3bbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o8xh_lbvg wm-k"/><path class="h5hpoq8kp wm-k"/><path class="wm-k z8twodclj"/><path class="weicl-k-p wm-a"/><path class="rwx0oacsc wm-s"/><path class="wm-k y7dx3bbtu"/></g>`,
		"fallback": "withicons:avatar-older-woman-sketch",
	});
}

export default Component;
