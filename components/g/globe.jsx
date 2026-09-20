import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/s/s_vlueboz.css';
import '../../css/q/qkp03cbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="hwsal5q-o"/><ellipse class="s_vlueboz"/><path class="qkp03cbde"/></g>`,
		"fallback": "lets-icons:globe",
	});
}

export default Component;
