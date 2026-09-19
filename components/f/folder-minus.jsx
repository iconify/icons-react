import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e93v3xb9z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e93v3xb9z"/>`,
		"fallback": "heroicons-solid:folder-minus",
	});
}

export default Component;
