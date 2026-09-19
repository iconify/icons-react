import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk6t0lwsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk6t0lwsy"/>`,
		"fallback": "griddy-icons:ai-flow",
	});
}

export default Component;
