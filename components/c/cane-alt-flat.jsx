import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk9y_wb6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nk9y_wb6c"/>`,
		"fallback": "streamline-color:cane-alt-flat",
	});
}

export default Component;
