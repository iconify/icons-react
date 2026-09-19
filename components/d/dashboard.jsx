import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw2mo3r6n.css';

const viewBox = {"width":700,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw2mo3r6n"/>`,
		"fallback": "il:dashboard",
	});
}

export default Component;
