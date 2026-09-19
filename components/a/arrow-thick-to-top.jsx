import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inlhb1gzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inlhb1gzv"/>`,
		"fallback": "cil:arrow-thick-to-top",
	});
}

export default Component;
