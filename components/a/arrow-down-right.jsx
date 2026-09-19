import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7x-4mbxv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7x-4mbxv"/>`,
		"fallback": "heroicons-solid:arrow-down-right",
	});
}

export default Component;
