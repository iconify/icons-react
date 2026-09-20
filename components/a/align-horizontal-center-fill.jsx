import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdr68o9hm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdr68o9hm"/>`,
		"fallback": "mingcute:align-horizontal-center-fill",
	});
}

export default Component;
