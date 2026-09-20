import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmfgqwb6s.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmfgqwb6s"/><path class="tbzab391z"/>`,
		"fallback": "openmoji:green-square",
	});
}

export default Component;
