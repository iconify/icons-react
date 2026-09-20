import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3icanbbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o3icanbbq"/>`,
		"fallback": "streamline-color:filter-2-flat",
	});
}

export default Component;
