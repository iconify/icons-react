import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yab6zj0-r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yab6zj0-r"/>`,
		"fallback": "fluent-mdl2:caret-solid-left",
	});
}

export default Component;
