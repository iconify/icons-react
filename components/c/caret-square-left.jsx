import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmqpj0ysb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmqpj0ysb"/>`,
		"fallback": "fa-solid:caret-square-left",
	});
}

export default Component;
