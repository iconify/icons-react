import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5t0sbxt.css';
import '../../css/u/u2hgkfb5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5t0sbxt"/><path class="u2hgkfb5m"/>`,
		"fallback": "energy-icons:carbon-price-48-bold",
	});
}

export default Component;
