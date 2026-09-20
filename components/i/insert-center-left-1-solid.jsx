import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faid7gmwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="faid7gmwu"/>`,
		"fallback": "streamline-flex:insert-center-left-1-solid",
	});
}

export default Component;
