import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7e3h4kof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7e3h4kof"/>`,
		"fallback": "ri:ghost-line",
	});
}

export default Component;
