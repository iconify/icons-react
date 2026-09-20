import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-9o316jz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-9o316jz"/>`,
		"fallback": "streamline-color:arrow-expand-flat",
	});
}

export default Component;
