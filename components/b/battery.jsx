import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uf0o_xbbb.css';
import '../../css/h/huci4xpnw.css';
import '../../css/u/uhxc-vbch.css';
import '../../css/m/mmaumbclu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="uf0o_xbbb"/><path class="huci4xpnw"/><path class="uhxc-vbch"/><path class="mmaumbclu"/></g>`,
		"fallback": "matita:battery",
	});
}

export default Component;
