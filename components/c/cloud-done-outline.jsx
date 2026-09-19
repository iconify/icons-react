import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4_g4nd3y.css';
import '../../css/g/g7862griq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4_g4nd3y"/><path class="g7862griq"/>`,
		"fallback": "famicons:cloud-done-outline",
	});
}

export default Component;
