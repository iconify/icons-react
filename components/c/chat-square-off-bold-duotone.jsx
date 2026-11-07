import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy1zqfbpa.css';
import '../../css/e/erra6gogy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy1zqfbpa"/><path class="erra6gogy"/>`,
		"fallback": "solar:chat-square-off-bold-duotone",
	});
}

export default Component;
