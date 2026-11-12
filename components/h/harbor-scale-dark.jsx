import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooo7ryxbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooo7ryxbv"/>`,
		"fallback": "selfhst:harbor-scale-dark",
	});
}

export default Component;
