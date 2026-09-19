import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1aasd4zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1aasd4zi"/>`,
		"fallback": "iconamoon:cursor-bold",
	});
}

export default Component;
