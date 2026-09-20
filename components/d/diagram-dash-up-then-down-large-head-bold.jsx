import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj9vmwbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj9vmwbgn"/>`,
		"fallback": "streamline-ultimate:diagram-dash-up-then-down-large-head-bold",
	});
}

export default Component;
