import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp_hwxv-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp_hwxv-r"/>`,
		"fallback": "token:ghost",
	});
}

export default Component;
