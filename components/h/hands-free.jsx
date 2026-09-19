import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6u72xbo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn6u72xbo"/>`,
		"fallback": "fluent-mdl2:hands-free",
	});
}

export default Component;
