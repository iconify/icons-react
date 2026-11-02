import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh4p9k52o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh4p9k52o"/>`,
		"fallback": "mingcute:git-branch-minus-fill",
	});
}

export default Component;
