import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv4s0n6-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv4s0n6-i"/>`,
		"fallback": "heroicons-solid:cloud-arrow-down",
	});
}

export default Component;
