import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/squd2zbwr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="squd2zbwr"/>`,
		"fallback": "heroicons-solid:cloud-arrow-up",
	});
}

export default Component;
