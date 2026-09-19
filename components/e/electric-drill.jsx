import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uiwsv8akx.css';
import '../../css/w/wqyxkuyuv.css';
import '../../css/h/h6uz_o3bp.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uiwsv8akx"/><path class="wqyxkuyuv"/><path class="h6uz_o3bp"/><path class="izth8wb4y"/></g>`,
		"fallback": "icon-park-solid:electric-drill",
	});
}

export default Component;
