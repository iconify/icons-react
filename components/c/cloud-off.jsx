import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc_upz09w.css';

const viewBox = {"width":512,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc_upz09w"/>`,
		"fallback": "zmdi:cloud-off",
	});
}

export default Component;
