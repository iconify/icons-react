import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr6eqdl_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr6eqdl_v"/>`,
		"fallback": "coolicons:behance-round",
	});
}

export default Component;
