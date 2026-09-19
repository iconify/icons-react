import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/z/zhcnnrbqz.css';
import '../../css/y/yg0-h_7ex.css';
import '../../css/x/xk7n9ubji.css';
import '../../css/y/yhtph-bed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="zhcnnrbqz"/><path class="yg0-h_7ex"/><path class="xk7n9ubji"/><path class="yhtph-bed"/></g>`,
		"fallback": "icon-park-solid:arena",
	});
}

export default Component;
