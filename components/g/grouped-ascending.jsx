import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khzb50yic.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khzb50yic"/>`,
		"fallback": "fluent-mdl2:grouped-ascending",
	});
}

export default Component;
