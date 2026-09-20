import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnv014_cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnv014_cp"/>`,
		"fallback": "thesvg-color:hacker-noon",
	});
}

export default Component;
