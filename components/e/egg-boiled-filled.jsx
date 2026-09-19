import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb4ighb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb4ighb2b"/>`,
		"fallback": "griddy-icons:egg-boiled-filled",
	});
}

export default Component;
