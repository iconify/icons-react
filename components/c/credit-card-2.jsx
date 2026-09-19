import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vu8g70hjm.css';
import '../../css/u/uxqzk2bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vu8g70hjm"/><rect class="uxqzk2bql"/></g>`,
		"fallback": "iconoir:credit-card-2",
	});
}

export default Component;
