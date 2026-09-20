import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_jc64d5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_jc64d5r"/>`,
		"fallback": "selfhst:caprover-dark",
	});
}

export default Component;
