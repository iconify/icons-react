import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljpn_2z5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljpn_2z5m"/>`,
		"fallback": "mingcute:bulb-fill",
	});
}

export default Component;
