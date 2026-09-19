import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtfr4tbxj.css';

const viewBox = {"width":11,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtfr4tbxj"/>`,
		"fallback": "fontisto:gulp",
	});
}

export default Component;
