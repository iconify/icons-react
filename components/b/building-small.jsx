import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmt0acwz.css';
import '../../css/t/tc0qvy92q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfmt0acwz"/><path class="tc0qvy92q"/>`,
		"fallback": "boxicons:building-small",
	});
}

export default Component;
