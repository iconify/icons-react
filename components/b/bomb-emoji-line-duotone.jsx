import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m8po4lb0y.css';
import '../../css/s/swwenbbzn.css';
import '../../css/x/x6n06bc8k.css';
import '../../css/w/ws_nvmbfy.css';
import '../../css/q/qy_bk4bmk.css';
import '../../css/n/nhusggbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="m8po4lb0y"/><path class="swwenbbzn"/><path class="x6n06bc8k"/><path class="ws_nvmbfy"/><path class="qy_bk4bmk"/><ellipse class="nhusggbmx"/></g>`,
		"fallback": "solar:bomb-emoji-line-duotone",
	});
}

export default Component;
