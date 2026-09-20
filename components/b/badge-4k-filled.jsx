import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojnzdfbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojnzdfbnm"/>`,
		"fallback": "tabler:badge-4k-filled",
	});
}

export default Component;
