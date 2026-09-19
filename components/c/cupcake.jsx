import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uen46bb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uen46bb-j"/>`,
		"fallback": "ci:cupcake",
	});
}

export default Component;
