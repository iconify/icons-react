import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvfunrbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvfunrbcp"/>`,
		"fallback": "si:credit-card-detailed-line",
	});
}

export default Component;
