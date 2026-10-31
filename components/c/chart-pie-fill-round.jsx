import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd560hbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd560hbwb"/>`,
		"fallback": "coolicons:chart-pie-fill-round",
	});
}

export default Component;
