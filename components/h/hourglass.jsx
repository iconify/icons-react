import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaadjjbon.css';

const viewBox = {"width":1024,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaadjjbon"/>`,
		"fallback": "vs:hourglass",
	});
}

export default Component;
