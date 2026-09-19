import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jin3rs3na.css';
import '../../css/p/pd26jybbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jin3rs3na"/><path class="pd26jybbz"/>`,
		"fallback": "boxicons:football",
	});
}

export default Component;
