import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxnef4b3r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxnef4b3r"/>`,
		"fallback": "pinhead:angel-moroni",
	});
}

export default Component;
