import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og45v3brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og45v3brk"/>`,
		"fallback": "vadivam:egg",
	});
}

export default Component;
