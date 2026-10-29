import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svcisg-2v.css';
import '../../css/q/q39xo3bho.css';
import '../../css/x/xxppldy8g.css';
import '../../css/w/ws_f3r_yy.css';
import '../../css/s/s7q7hbcbs.css';
import '../../css/g/gp-pdibzm.css';
import '../../css/x/xmxnglewj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svcisg-2v wm-shadow"/><path class="q39xo3bho"/><path class="xxppldy8g"/><path class="ws_f3r_yy"/><path class="s7q7hbcbs"/><path class="gp-pdibzm wm-shine"/><path class="xmxnglewj"/>`,
		"fallback": "withicons-plush:command",
	});
}

export default Component;
