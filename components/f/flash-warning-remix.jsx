import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrkqf83p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylrkqf83p"/>`,
		"fallback": "streamline-flex:flash-warning-remix",
	});
}

export default Component;
