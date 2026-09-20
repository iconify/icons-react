import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t63k_lbpx.css';
import '../../css/y/yye-hjo_v.css';
import '../../css/u/uati5bbqx.css';
import '../../css/i/im7eucezq.css';
import '../../css/t/t1d-2pjsb.css';
import '../../css/u/uskh-2bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t63k_lbpx"/><path class="yye-hjo_v"/><path class="uati5bbqx"/><path class="im7eucezq"/><path class="t1d-2pjsb"/><path class="uskh-2bej"/></g>`,
		"fallback": "streamline-cyber-color:cursor-arrow-target",
	});
}

export default Component;
