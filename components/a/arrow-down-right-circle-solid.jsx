import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq3y2-bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq3y2-bza"/>`,
		"fallback": "mynaui:arrow-down-right-circle-solid",
	});
}

export default Component;
