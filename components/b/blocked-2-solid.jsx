import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz-z7fmos.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz-z7fmos"/>`,
		"fallback": "fluent-mdl2:blocked-2-solid",
	});
}

export default Component;
