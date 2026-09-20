import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blmt__b_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blmt__b_r"/>`,
		"fallback": "selfhst:google-shopping-dark",
	});
}

export default Component;
