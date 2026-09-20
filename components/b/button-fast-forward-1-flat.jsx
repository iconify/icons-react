import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rps_n-b1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rps_n-b1u"/>`,
		"fallback": "streamline-color:button-fast-forward-1-flat",
	});
}

export default Component;
