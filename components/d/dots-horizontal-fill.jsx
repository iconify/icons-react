import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljh0thbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljh0thbyw"/>`,
		"fallback": "mingcute:dots-horizontal-fill",
	});
}

export default Component;
