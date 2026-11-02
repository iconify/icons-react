import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj4pwu2ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj4pwu2ue"/>`,
		"fallback": "mingcute:git-commit-horizontal-line",
	});
}

export default Component;
