import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnvxsh6ed.css';
import '../../css/w/wp_6hx3_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnvxsh6ed"/><path class="wp_6hx3_h"/>`,
		"fallback": "famicons:cloud-offline-outline",
	});
}

export default Component;
