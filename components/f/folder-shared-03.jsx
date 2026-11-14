import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k97snyb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k97snyb1t"/>`,
		"fallback": "hugeicons:folder-shared-03",
	});
}

export default Component;
