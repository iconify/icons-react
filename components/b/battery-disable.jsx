import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/her-4ob5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="her-4ob5m"/>`,
		"fallback": "reicon:battery-disable",
	});
}

export default Component;
