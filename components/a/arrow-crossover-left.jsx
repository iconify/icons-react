import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo9ej9zfd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo9ej9zfd"/>`,
		"fallback": "streamline-color:arrow-crossover-left",
	});
}

export default Component;
