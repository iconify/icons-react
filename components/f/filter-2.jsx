import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0bt83fwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0bt83fwu"/>`,
		"fallback": "streamline-flex:filter-2",
	});
}

export default Component;
