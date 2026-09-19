import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7i-_hv-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7i-_hv-r"/>`,
		"fallback": "cil:folder-open",
	});
}

export default Component;
