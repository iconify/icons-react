import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kylt39b5y.css';
import '../../css/y/yd630t_sn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kylt39b5y"/><path class="yd630t_sn"/></g>`,
		"fallback": "streamline-flex:information-circle",
	});
}

export default Component;
