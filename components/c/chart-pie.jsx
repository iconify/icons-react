import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/quc5gzb9z.css';
import '../../css/a/ae-zofb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="quc5gzb9z"/><path class="ae-zofb9f"/></g>`,
		"fallback": "matita:chart-pie",
	});
}

export default Component;
