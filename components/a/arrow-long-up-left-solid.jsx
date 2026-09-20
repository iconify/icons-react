import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb5bfclwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb5bfclwr"/>`,
		"fallback": "mynaui:arrow-long-up-left-solid",
	});
}

export default Component;
