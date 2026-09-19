import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9-7c3drh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9-7c3drh"/>`,
		"fallback": "heroicons-solid:cursor-arrow-rays",
	});
}

export default Component;
