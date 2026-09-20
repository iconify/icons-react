import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roquk4b2w.css';
import '../../css/t/tba9ohb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roquk4b2w"/><path class="tba9ohb5t"/>`,
		"fallback": "stash:credit-card",
	});
}

export default Component;
