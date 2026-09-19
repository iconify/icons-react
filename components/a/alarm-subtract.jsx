import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsubc8bso.css';
import '../../css/b/b3wbj4but.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsubc8bso"/><path class="b3wbj4but"/>`,
		"fallback": "carbon:alarm-subtract",
	});
}

export default Component;
