import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-78cfw_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-78cfw_o"/>`,
		"fallback": "streamline-flex-color:block-2-flat",
	});
}

export default Component;
