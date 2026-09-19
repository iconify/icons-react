import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg2qp55av.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yg2qp55av"/>`,
		"fallback": "pepicons:folder",
	});
}

export default Component;
