import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaax5ob0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaax5ob0h"/>`,
		"fallback": "tabler:arrow-badge-right-filled",
	});
}

export default Component;
