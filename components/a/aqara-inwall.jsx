import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap6ub7b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap6ub7b7j"/>`,
		"fallback": "cbi:aqara-inwall",
	});
}

export default Component;
