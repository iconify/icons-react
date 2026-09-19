import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii7a4u0gn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii7a4u0gn"/>`,
		"fallback": "file-icons:hyper",
	});
}

export default Component;
