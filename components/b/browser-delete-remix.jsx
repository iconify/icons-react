import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei_60e-bn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ei_60e-bn"/>`,
		"fallback": "streamline:browser-delete-remix",
	});
}

export default Component;
