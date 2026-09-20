import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb1_c-35o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb1_c-35o"/>`,
		"fallback": "keyline-icons:circle-chevron-right-fill",
	});
}

export default Component;
