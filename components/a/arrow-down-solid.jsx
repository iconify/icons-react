import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw972ynsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw972ynsn"/>`,
		"fallback": "mynaui:arrow-down-solid",
	});
}

export default Component;
