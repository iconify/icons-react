import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqeftx7zl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqeftx7zl"/>`,
		"fallback": "pepicons-pencil:checkmark-filled",
	});
}

export default Component;
