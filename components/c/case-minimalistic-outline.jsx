import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoucfib8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zoucfib8e"/>`,
		"fallback": "solar:case-minimalistic-outline",
	});
}

export default Component;
