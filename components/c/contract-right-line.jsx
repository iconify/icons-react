import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl2074zep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl2074zep"/>`,
		"fallback": "ri:contract-right-line",
	});
}

export default Component;
