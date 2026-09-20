import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av1mmm5yj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="av1mmm5yj"/>`,
		"fallback": "keyline-icons:badge-alert-fill",
	});
}

export default Component;
