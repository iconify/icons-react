import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po7r85g_i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po7r85g_i"/>`,
		"fallback": "devicon-plain:cassandra",
	});
}

export default Component;
