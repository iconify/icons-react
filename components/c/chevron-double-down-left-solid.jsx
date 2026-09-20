import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omdufj77v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omdufj77v"/>`,
		"fallback": "mynaui:chevron-double-down-left-solid",
	});
}

export default Component;
