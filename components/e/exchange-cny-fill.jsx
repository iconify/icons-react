import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl90geboo.css';
import '../../css/h/h695rk-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl90geboo"/><path class="h695rk-bi"/>`,
		"fallback": "mingcute:exchange-cny-fill",
	});
}

export default Component;
