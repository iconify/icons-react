import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlz3lbr5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlz3lbr5n"/>`,
		"fallback": "si:flow-tree-line",
	});
}

export default Component;
