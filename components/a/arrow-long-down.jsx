import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etbkadbiu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="etbkadbiu"/>`,
		"fallback": "heroicons-solid:arrow-long-down",
	});
}

export default Component;
