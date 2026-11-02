import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ir54bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ir54bst"/>`,
		"fallback": "mingcute:align-vertical-justify-center-line",
	});
}

export default Component;
