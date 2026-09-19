import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xppq04p1i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xppq04p1i"/>`,
		"fallback": "heroicons-solid:document-add",
	});
}

export default Component;
