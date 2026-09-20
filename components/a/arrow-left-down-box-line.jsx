import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdh5gcb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdh5gcb3h"/>`,
		"fallback": "ri:arrow-left-down-box-line",
	});
}

export default Component;
