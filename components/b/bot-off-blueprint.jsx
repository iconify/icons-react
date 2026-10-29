import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vvou-acgl.css';
import '../../css/x/xj-07jblj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/y/ym84-zbob.css';
import '../../css/u/ufw4vncyi.css';
import '../../css/b/b83hx2bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vvou-acgl wm-deco"/><path class="wm-deco xj-07jblj"/><path class="o7-ag87sb wm-deco"/><path class="wm-k ym84-zbob"/><path class="ufw4vncyi wm-a"/><path class="b83hx2bbd wm-s"/></g>`,
		"fallback": "withicons:bot-off-blueprint",
	});
}

export default Component;
