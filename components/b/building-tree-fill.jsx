import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d46e2yb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d46e2yb0n"/>`,
		"fallback": "mage:building-tree-fill",
	});
}

export default Component;
