import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8djc38rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8djc38rd"/>`,
		"fallback": "mingcute:git-branch-fill",
	});
}

export default Component;
