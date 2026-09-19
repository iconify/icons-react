import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvry-j2zb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvry-j2zb"/>`,
		"fallback": "fa7-solid:bus-side",
	});
}

export default Component;
