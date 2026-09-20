import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx7lfyb5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx7lfyb5o"/>`,
		"fallback": "pepicons-pencil:equal",
	});
}

export default Component;
