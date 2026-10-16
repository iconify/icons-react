import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai3gqkb8w.css';
import '../../css/e/ejk8koamo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai3gqkb8w"/><path class="ejk8koamo"/>`,
		"fallback": "energy-icons:gas-compressor-20",
	});
}

export default Component;
