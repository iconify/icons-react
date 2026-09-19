import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhoz3sbzr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhoz3sbzr"/>`,
		"fallback": "fluent-mdl2:caret-top-right-solid-8",
	});
}

export default Component;
