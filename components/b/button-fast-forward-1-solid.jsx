import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuv56d10r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuv56d10r"/>`,
		"fallback": "streamline:button-fast-forward-1-solid",
	});
}

export default Component;
