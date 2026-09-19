import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwyqtbq_i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwyqtbq_i"/>`,
		"fallback": "fluent-mdl2:buffer-time-before",
	});
}

export default Component;
