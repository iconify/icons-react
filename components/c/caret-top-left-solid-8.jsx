import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb-7dubgc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb-7dubgc"/>`,
		"fallback": "fluent-mdl2:caret-top-left-solid-8",
	});
}

export default Component;
