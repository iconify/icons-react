import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaku_ef4i.css';
import '../../css/r/rk8kk9b0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaku_ef4i"/><path class="rk8kk9b0n"/>`,
		"fallback": "cil:burn",
	});
}

export default Component;
