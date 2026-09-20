import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmaa6ub8n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmaa6ub8n"/>`,
		"fallback": "memory:alpha-w-fill",
	});
}

export default Component;
