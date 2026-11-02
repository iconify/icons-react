import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yud24mw5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yud24mw5l"/>`,
		"fallback": "mingcute:hiking-fill",
	});
}

export default Component;
