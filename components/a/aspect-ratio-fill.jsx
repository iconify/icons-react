import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhc643b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhc643b8f"/>`,
		"fallback": "mingcute:aspect-ratio-fill",
	});
}

export default Component;
