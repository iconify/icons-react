import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xachhj26g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xachhj26g"/>`,
		"fallback": "weui:discover-outlined",
	});
}

export default Component;
