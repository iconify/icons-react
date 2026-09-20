import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cga2esbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cga2esbue"/>`,
		"fallback": "mdi:forum-remove-outline",
	});
}

export default Component;
