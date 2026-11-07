import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d47bocb9j.css';
import '../../css/b/byonj9b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d47bocb9j"/><path class="byonj9b2c"/></g>`,
		"fallback": "solar:crown-line-broken",
	});
}

export default Component;
