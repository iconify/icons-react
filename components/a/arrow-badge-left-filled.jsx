import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ptejxwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ptejxwb"/>`,
		"fallback": "tabler:arrow-badge-left-filled",
	});
}

export default Component;
