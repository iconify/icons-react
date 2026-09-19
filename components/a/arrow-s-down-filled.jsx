import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb3n8obkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb3n8obkq"/>`,
		"fallback": "boxicons:arrow-s-down-filled",
	});
}

export default Component;
