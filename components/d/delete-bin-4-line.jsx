import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yohi3qbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yohi3qbjl"/>`,
		"fallback": "ri:delete-bin-4-line",
	});
}

export default Component;
