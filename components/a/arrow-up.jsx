import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/komf3mb5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="komf3mb5c"/>`,
		"fallback": "heroicons-solid:arrow-up",
	});
}

export default Component;
