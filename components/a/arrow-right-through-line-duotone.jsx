import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keov08rnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keov08rnv primary"/>`,
		"fallback": "iconaut:arrow-right-through-line-duotone",
	});
}

export default Component;
