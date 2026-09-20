import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcyyobc0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcyyobc0n"/>`,
		"fallback": "ix:factory-reset-filled",
	});
}

export default Component;
