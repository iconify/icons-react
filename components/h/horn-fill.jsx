import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oql-g90za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oql-g90za"/>`,
		"fallback": "mingcute:horn-fill",
	});
}

export default Component;
