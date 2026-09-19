import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnij756ni.css';
import '../../css/s/sz1mxmeui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnij756ni"/><path class="sz1mxmeui"/>`,
		"fallback": "carbon:breaking-change",
	});
}

export default Component;
