import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpc6m9n0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpc6m9n0l"/>`,
		"fallback": "mingcute:border-right-fill",
	});
}

export default Component;
