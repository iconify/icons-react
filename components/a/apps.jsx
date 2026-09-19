import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7x0_fbqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7x0_fbqk"/>`,
		"fallback": "famicons:apps",
	});
}

export default Component;
