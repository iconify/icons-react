import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-m0grb6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-m0grb6b"/>`,
		"fallback": "codicon:debug-stackframe",
	});
}

export default Component;
