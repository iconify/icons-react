import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yarglacmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yarglacmw"/>`,
		"fallback": "ri:corner-up-left-double-line",
	});
}

export default Component;
