import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv4q6-env.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv4q6-env"/>`,
		"fallback": "fluent-mdl2:book-answers",
	});
}

export default Component;
