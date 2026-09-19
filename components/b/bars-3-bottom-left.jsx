import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb6l9qbbi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb6l9qbbi"/>`,
		"fallback": "heroicons-solid:bars-3-bottom-left",
	});
}

export default Component;
