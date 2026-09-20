import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ash0d0bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ash0d0bka"/>`,
		"fallback": "tabler:filter-2-cancel",
	});
}

export default Component;
