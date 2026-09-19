import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7lh0s6zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7lh0s6zx"/>`,
		"fallback": "file-icons:devicetree",
	});
}

export default Component;
