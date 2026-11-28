import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7c2ymwll.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/r/rvi3m3bvn.css';
import '../../css/t/tkcc8g1nv.css';
import '../../css/x/xui_jhgnu.css';
import '../../css/s/sj9w6gbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7c2ymwll secondary"/><g class="dt0cm9dhy primary"><path class="sb-u7hbtr"/><path class="rvi3m3bvn"/><path class="tkcc8g1nv"/><path class="xui_jhgnu"/><path class="sj9w6gbtc"/></g>`,
		"fallback": "iconaut:gamepad-duo",
	});
}

export default Component;
