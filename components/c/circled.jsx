import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-u0geb4d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-u0geb4d"/>`,
		"fallback": "whh:circled",
	});
}

export default Component;
