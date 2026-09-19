import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl4cs1byp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fl4cs1byp"/>`,
		"fallback": "heroicons:document-minus-20-solid",
	});
}

export default Component;
