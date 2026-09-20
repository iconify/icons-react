import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znih9hbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znih9hbup"/>`,
		"fallback": "mdi:gradient-horizontal",
	});
}

export default Component;
