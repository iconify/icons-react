import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhiy7tbga.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhiy7tbga"/>`,
		"fallback": "f7:desktopcomputer",
	});
}

export default Component;
