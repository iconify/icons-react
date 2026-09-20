import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6ek9acdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6ek9acdk"/>`,
		"fallback": "streamline-color:check",
	});
}

export default Component;
