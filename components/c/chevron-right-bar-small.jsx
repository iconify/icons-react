import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh57bvagt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qh57bvagt"/>`,
		"fallback": "ix:chevron-right-bar-small",
	});
}

export default Component;
