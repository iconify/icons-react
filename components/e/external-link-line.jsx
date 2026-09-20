import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcmlbv4_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcmlbv4_v"/>`,
		"fallback": "mingcute:external-link-line",
	});
}

export default Component;
