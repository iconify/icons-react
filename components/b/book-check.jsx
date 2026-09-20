import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au1r8v_ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au1r8v_ro"/>`,
		"fallback": "mdi:book-check",
	});
}

export default Component;
