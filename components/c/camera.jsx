import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro16jfb8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro16jfb8t"/>`,
		"fallback": "heroicons-solid:camera",
	});
}

export default Component;
