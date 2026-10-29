import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qh8bn-u7p.css';
import '../../css/h/hz1637bhd.css';
import '../../css/o/o3os9344g.css';
import '../../css/v/v1055zads.css';
import '../../css/u/uv6uwdbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qh8bn-u7p wm-k"/><path class="hz1637bhd wm-a"/><path class="o3os9344g wm-shadow"/><path class="v1055zads wm-k"/><path class="uv6uwdbji wm-a"/></g>`,
		"fallback": "withicons:chart-donut-engrave",
	});
}

export default Component;
