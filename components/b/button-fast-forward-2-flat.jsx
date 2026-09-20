import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad2gw6bti.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ad2gw6bti"/>`,
		"fallback": "streamline-color:button-fast-forward-2-flat",
	});
}

export default Component;
