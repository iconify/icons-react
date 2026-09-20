import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0xnzza0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0xnzza0w"/>`,
		"fallback": "si:building-alt-3-fill",
	});
}

export default Component;
