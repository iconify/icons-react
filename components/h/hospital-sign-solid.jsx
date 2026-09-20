import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1fvv2b8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1fvv2b8e"/>`,
		"fallback": "streamline-flex:hospital-sign-solid",
	});
}

export default Component;
