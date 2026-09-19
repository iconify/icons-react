import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk5o7kbjs.css';
import '../../css/v/vem7gutod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk5o7kbjs"/><path class="vem7gutod"/>`,
		"fallback": "carbon:circle-measurement",
	});
}

export default Component;
