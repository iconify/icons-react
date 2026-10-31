import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvdw0obcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvdw0obcr"/>`,
		"fallback": "coolicons:frame-round",
	});
}

export default Component;
