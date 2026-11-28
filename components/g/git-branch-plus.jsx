import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2gb-zb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2gb-zb6b"/>`,
		"fallback": "noviair-light:git-branch-plus",
	});
}

export default Component;
