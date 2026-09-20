import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7xgafu0h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p7xgafu0h"/>`,
		"fallback": "streamline-flex-color:cog-flat",
	});
}

export default Component;
