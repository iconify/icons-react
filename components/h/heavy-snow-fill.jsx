import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwer2dd0j.css';
import '../../css/o/oulisxbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwer2dd0j"/><path class="oulisxbyc"/>`,
		"fallback": "mingcute:heavy-snow-fill",
	});
}

export default Component;
