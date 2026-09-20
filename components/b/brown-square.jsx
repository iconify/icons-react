import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_a9inbrs.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_a9inbrs"/><path class="tbzab391z"/>`,
		"fallback": "openmoji:brown-square",
	});
}

export default Component;
