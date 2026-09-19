import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u65btl1tl.css';
import '../../css/d/dl42-n8go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u65btl1tl"/><path class="dl42-n8go"/>`,
		"fallback": "boxicons:arrow-out-down-circle-half-filled",
	});
}

export default Component;
