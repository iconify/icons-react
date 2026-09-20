import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dz2jgmblh.css';
import '../../css/v/v9voqlbkr.css';
import '../../css/n/n46ex7bxd.css';
import '../../css/x/xzld9cb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dz2jgmblh"/><path class="v9voqlbkr"/><path class="n46ex7bxd"/><path class="xzld9cb_u"/></g>`,
		"fallback": "streamline-cyber:business-question",
	});
}

export default Component;
