import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmj1jdbvk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmj1jdbvk"/>`,
		"fallback": "pinhead:arrow-up-to-ticket-in-slot",
	});
}

export default Component;
