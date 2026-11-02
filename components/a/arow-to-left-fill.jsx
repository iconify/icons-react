import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecfu3hp6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecfu3hp6x"/>`,
		"fallback": "mingcute:arow-to-left-fill",
	});
}

export default Component;
