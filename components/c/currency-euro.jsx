import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp255lbcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pp255lbcp"/>`,
		"fallback": "heroicons-solid:currency-euro",
	});
}

export default Component;
