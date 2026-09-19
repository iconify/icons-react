import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgmvd28_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgmvd28_h"/>`,
		"fallback": "heroicons-solid:badge-check",
	});
}

export default Component;
