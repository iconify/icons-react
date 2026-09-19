import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8yu8b3h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8yu8b3h"/>`,
		"fallback": "fluent-mdl2:double-chevron-up-12",
	});
}

export default Component;
