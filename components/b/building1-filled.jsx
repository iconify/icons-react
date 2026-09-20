import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vti7wdbwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vti7wdbwk"/>`,
		"fallback": "ix:building1-filled",
	});
}

export default Component;
