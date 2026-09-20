import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7iv0c6ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7iv0c6ha"/>`,
		"fallback": "mingcute:corner-up-left-fill",
	});
}

export default Component;
