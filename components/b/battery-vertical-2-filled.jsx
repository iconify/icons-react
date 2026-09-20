import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7w_-bb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7w_-bb4v"/>`,
		"fallback": "tabler:battery-vertical-2-filled",
	});
}

export default Component;
