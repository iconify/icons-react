import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syrocm9wg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syrocm9wg"/>`,
		"fallback": "streamline:flip-vertical-circle-1-solid",
	});
}

export default Component;
