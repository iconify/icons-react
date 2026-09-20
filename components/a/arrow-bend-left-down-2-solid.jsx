import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8plw6brr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e8plw6brr"/>`,
		"fallback": "streamline:arrow-bend-left-down-2-solid",
	});
}

export default Component;
