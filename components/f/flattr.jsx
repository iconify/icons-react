import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukqdl4brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukqdl4brn"/>`,
		"fallback": "simple-icons:flattr",
	});
}

export default Component;
