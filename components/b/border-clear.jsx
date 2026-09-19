import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvvx_2iyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvvx_2iyn"/>`,
		"fallback": "cil:border-clear",
	});
}

export default Component;
