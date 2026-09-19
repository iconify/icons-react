import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe555z8cp.css';

const viewBox = {"width":1026,"height":962};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe555z8cp"/>`,
		"fallback": "whh:favorite",
	});
}

export default Component;
