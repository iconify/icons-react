import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtee50-8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtee50-8v"/>`,
		"fallback": "ix:duplicate-filled",
	});
}

export default Component;
