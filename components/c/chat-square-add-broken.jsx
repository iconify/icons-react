import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ejdkgccas.css';
import '../../css/k/kjby0jbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ejdkgccas"/><path class="kjby0jbps"/></g>`,
		"fallback": "solar:chat-square-add-broken",
	});
}

export default Component;
