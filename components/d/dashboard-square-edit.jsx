import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kpn1-nb4t.css';
import '../../css/f/flag9k8tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kpn1-nb4t"/><path class="flag9k8tp"/></g>`,
		"fallback": "hugeicons:dashboard-square-edit",
	});
}

export default Component;
