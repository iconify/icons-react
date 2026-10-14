import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yr808bchh.css';
import '../../css/a/ae-zofb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yr808bchh"/><path class="ae-zofb9f"/></g>`,
		"fallback": "matita:chart-pie",
	});
}

export default Component;
