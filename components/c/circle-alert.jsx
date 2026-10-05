import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wnfyxhgkc.css';
import '../../css/h/ht2dh_bbo.css';
import '../../css/k/k628_qb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wnfyxhgkc"/><path class="ht2dh_bbo"/><path class="k628_qb9t"/></g>`,
		"fallback": "matita:circle-alert",
	});
}

export default Component;
