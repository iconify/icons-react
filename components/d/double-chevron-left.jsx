import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx8vx6qnw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx8vx6qnw"/>`,
		"fallback": "fluent-mdl2:double-chevron-left",
	});
}

export default Component;
