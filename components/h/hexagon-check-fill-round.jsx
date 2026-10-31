import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cul32lbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cul32lbjx"/>`,
		"fallback": "coolicons:hexagon-check-fill-round",
	});
}

export default Component;
