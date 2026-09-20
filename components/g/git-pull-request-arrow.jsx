import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvnl4tf6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvnl4tf6p"/>`,
		"fallback": "keyline-icons:git-pull-request-arrow",
	});
}

export default Component;
