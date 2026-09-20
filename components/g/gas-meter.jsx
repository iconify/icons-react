import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpvwby7ij.css';
import '../../css/o/oos9gs_0r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpvwby7ij"/><path class="oos9gs_0r"/>`,
		"fallback": "temaki:gas-meter",
	});
}

export default Component;
