import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iguhhz2_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iguhhz2_r"/>`,
		"fallback": "cil:crop",
	});
}

export default Component;
