import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebax7cb2d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ebax7cb2d"/>`,
		"fallback": "heroicons-solid:bars-2",
	});
}

export default Component;
