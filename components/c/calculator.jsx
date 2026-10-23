import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uc3-lxbkx.css';
import '../../css/r/rw1_sibox.css';
import '../../css/v/v4vpnfbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="uc3-lxbkx"/><path class="rw1_sibox"/><path class="v4vpnfbvc"/></g>`,
		"fallback": "matita:calculator",
	});
}

export default Component;
