import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3824eb3w.css';
import '../../css/u/u5_58bctg.css';
import '../../css/k/kpmaaubsa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3824eb3w"/><path class="u5_58bctg"/><path class="kpmaaubsa"/>`,
		"fallback": "openmoji:glass-of-milk",
	});
}

export default Component;
