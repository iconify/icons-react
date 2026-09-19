import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksvyc4bov.css';

const viewBox = {"width":1216,"height":1632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksvyc4bov"/>`,
		"fallback": "vs:door-closed",
	});
}

export default Component;
