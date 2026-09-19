import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckg1p6biu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckg1p6biu"/>`,
		"fallback": "fluent-mdl2:incoming-call",
	});
}

export default Component;
