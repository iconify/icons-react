import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-gw61byf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g-gw61byf"/>`,
		"fallback": "ix:element-filled",
	});
}

export default Component;
