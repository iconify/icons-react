import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb4s8hb7h.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb4s8hb7h"/>`,
		"fallback": "fa-solid:hiking",
	});
}

export default Component;
