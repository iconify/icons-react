import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbneb4u-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbneb4u-e"/>`,
		"fallback": "solar:bookmark-opened-outline",
	});
}

export default Component;
