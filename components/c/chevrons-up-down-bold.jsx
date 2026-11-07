import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7lymocvt.css';
import '../../css/g/gx3w35u0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7lymocvt"/><path class="gx3w35u0s"/>`,
		"fallback": "solar:chevrons-up-down-bold",
	});
}

export default Component;
