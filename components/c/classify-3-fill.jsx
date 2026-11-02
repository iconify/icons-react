import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsh5q4j1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsh5q4j1i"/>`,
		"fallback": "mingcute:classify-3-fill",
	});
}

export default Component;
