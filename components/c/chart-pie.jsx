import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l4ns8wu7r.css';
import '../../css/p/p0_li50bq.css';
import '../../css/s/syvzxixou.css';
import '../../css/a/amkbsmbvf.css';
import '../../css/b/b2bf7eb7x.css';
import '../../css/r/rysun9bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l4ns8wu7r wm-shadow"/><path class="p0_li50bq"/><path class="syvzxixou"/><path class="amkbsmbvf"/><path class="b2bf7eb7x"/><path class="rysun9bua"/></g>`,
		"fallback": "withicons-retro:chart-pie",
	});
}

export default Component;
