import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0zas8ffh.css';
import '../../css/e/ehrduyi4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0zas8ffh"/><path class="ehrduyi4r"/>`,
		"fallback": "selfhst:fidelity",
	});
}

export default Component;
