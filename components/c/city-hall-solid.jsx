import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5rbfwb_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5rbfwb_q"/>`,
		"fallback": "streamline:city-hall-solid",
	});
}

export default Component;
