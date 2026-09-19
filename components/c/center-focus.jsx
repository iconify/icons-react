import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do3z1_b6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do3z1_b6o"/>`,
		"fallback": "cil:center-focus",
	});
}

export default Component;
