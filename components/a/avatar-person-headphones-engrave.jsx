import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-4wz0bpd.css';
import '../../css/r/rzm1nobkb.css';
import '../../css/a/amx32cbyq.css';
import '../../css/j/jnmyo5jwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/q/q6hphdz7k.css';
import '../../css/y/ysbsdobug.css';
import '../../css/x/xvjipzb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i-4wz0bpd wm-k"/><path class="rzm1nobkb wm-a"/><path class="amx32cbyq wm-shadow"/><path class="jnmyo5jwp wm-k"/><path class="d3y9mw6db wm-k"/><path class="q6hphdz7k wm-a"/><path class="wm-a ysbsdobug"/><path class="wm-a xvjipzb1h"/></g>`,
		"fallback": "withicons:avatar-person-headphones-engrave",
	});
}

export default Component;
