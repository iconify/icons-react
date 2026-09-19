import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iysm_8bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iysm_8bpt"/>`,
		"fallback": "boxicons:greater-than",
	});
}

export default Component;
