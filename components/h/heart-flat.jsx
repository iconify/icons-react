import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqiv6ve1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqiv6ve1y"/>`,
		"fallback": "streamline-flex-color:heart-flat",
	});
}

export default Component;
