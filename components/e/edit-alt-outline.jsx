import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-w7s1bmt.css';
import '../../css/y/ys8pa0b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z-w7s1bmt"/><path class="ys8pa0b4y"/>`,
		"fallback": "basil:edit-alt-outline",
	});
}

export default Component;
