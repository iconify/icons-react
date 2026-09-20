import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iz9cq8bph.css';
import '../../css/n/n0481d_hy.css';
import '../../css/r/rsi2v6_mx.css';
import '../../css/h/htenewwyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iz9cq8bph"/><path class="n0481d_hy"/><path class="rsi2v6_mx"/><path class="htenewwyl"/></g>`,
		"fallback": "streamline-plump-color:add-bell-notification",
	});
}

export default Component;
