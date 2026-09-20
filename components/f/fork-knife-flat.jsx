import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9j8sz_4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t9j8sz_4n"/>`,
		"fallback": "streamline-color:fork-knife-flat",
	});
}

export default Component;
