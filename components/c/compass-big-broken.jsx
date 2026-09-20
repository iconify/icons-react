import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knnj862ms.css';
import '../../css/s/s8ozk_bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="knnj862ms"/><path class="s8ozk_bvp"/></g>`,
		"fallback": "solar:compass-big-broken",
	});
}

export default Component;
