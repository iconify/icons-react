import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idsu3yboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idsu3yboh"/>`,
		"fallback": "keyline-icons:circle-bar-chart-horizontal-end-fill",
	});
}

export default Component;
