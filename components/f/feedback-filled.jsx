import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9s4lmbgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9s4lmbgx"/>`,
		"fallback": "ix:feedback-filled",
	});
}

export default Component;
