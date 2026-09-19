import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtavydp0v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtavydp0v"/>`,
		"fallback": "fa7-solid:align-justify",
	});
}

export default Component;
