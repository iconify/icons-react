import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygrgegf7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygrgegf7b"/>`,
		"fallback": "mingcute:fullscreen-exit-2-fill",
	});
}

export default Component;
