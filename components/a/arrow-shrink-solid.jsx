import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e25psnbjb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e25psnbjb"/>`,
		"fallback": "streamline:arrow-shrink-solid",
	});
}

export default Component;
