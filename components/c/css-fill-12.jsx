import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6qe8n8xj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6qe8n8xj"/>`,
		"fallback": "garden:css-fill-12",
	});
}

export default Component;
