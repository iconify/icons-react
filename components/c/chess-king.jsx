import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqtd8hbog.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqtd8hbog"/>`,
		"fallback": "fa6-solid:chess-king",
	});
}

export default Component;
