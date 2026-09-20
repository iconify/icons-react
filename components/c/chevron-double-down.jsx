import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysymgubea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysymgubea"/>`,
		"fallback": "mdi:chevron-double-down",
	});
}

export default Component;
