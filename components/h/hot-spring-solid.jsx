import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5ioi-sgl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n5ioi-sgl"/>`,
		"fallback": "streamline:hot-spring-solid",
	});
}

export default Component;
