import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rq-nxkb_q.css';
import '../../css/q/qau4nrf3q.css';
import '../../css/x/x32pu-b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rq-nxkb_q"/><path class="qau4nrf3q"/><path class="x32pu-b8p"/></g>`,
		"fallback": "streamline-cyber:computer-imac-check",
	});
}

export default Component;
