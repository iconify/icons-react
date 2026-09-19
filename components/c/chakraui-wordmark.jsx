import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idg_8uiwz.css';
import '../../css/t/t_a4n6bgp.css';
import '../../css/k/k5hxd8xqj.css';
import '../../css/q/q_3hzisyr.css';
import '../../css/q/qtp_gobba.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG5eS77dHI" x1="64" x2="64" y1="0" y2="128" gradientTransform="translate(0 47.45)scale(.25859)" gradientUnits="userSpaceOnUse"><stop offset="0" class="idg_8uiwz"/><stop offset="1" class="t_a4n6bgp"/></linearGradient></defs><path class="k5hxd8xqj"/><circle fill="url(#SVG5eS77dHI)" class="q_3hzisyr"/><path class="qtp_gobba"/>`,
		"fallback": "devicon:chakraui-wordmark",
	});
}

export default Component;
