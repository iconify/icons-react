import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn-1o2b-i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn-1o2b-i"/>`,
		"fallback": "fluent-mdl2:caret-solid-up",
	});
}

export default Component;
