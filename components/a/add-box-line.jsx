import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yos525bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yos525bkf"/>`,
		"fallback": "ri:add-box-line",
	});
}

export default Component;
