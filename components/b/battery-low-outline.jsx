import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnqh4sixl.css';
import '../../css/n/n2noceb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnqh4sixl"/><path clip-rule="evenodd" class="n2noceb1n"/>`,
		"fallback": "solar:battery-low-outline",
	});
}

export default Component;
