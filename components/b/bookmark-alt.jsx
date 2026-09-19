import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uats1sbjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uats1sbjb"/>`,
		"fallback": "heroicons-solid:bookmark-alt",
	});
}

export default Component;
