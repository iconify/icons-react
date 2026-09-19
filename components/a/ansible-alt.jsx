import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnxf5iqlo.css';

const viewBox = {"width":469,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnxf5iqlo"/>`,
		"fallback": "file-icons:ansible-alt",
	});
}

export default Component;
