import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihsg2t7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihsg2t7l"/>`,
		"fallback": "mingcute:film-fill",
	});
}

export default Component;
