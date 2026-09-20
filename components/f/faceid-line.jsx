import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmizg-b1r.css';
import '../../css/w/wuslfeixb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmizg-b1r"/><path class="wuslfeixb"/>`,
		"fallback": "mingcute:faceid-line",
	});
}

export default Component;
