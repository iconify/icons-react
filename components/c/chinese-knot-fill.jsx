import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gos7t18ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gos7t18ro"/>`,
		"fallback": "mingcute:chinese-knot-fill",
	});
}

export default Component;
