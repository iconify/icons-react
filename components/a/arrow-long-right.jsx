import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q66kfjv6k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q66kfjv6k"/>`,
		"fallback": "heroicons-solid:arrow-long-right",
	});
}

export default Component;
