import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p86ew9b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p86ew9b7o"/>`,
		"fallback": "typcn:folder-open",
	});
}

export default Component;
