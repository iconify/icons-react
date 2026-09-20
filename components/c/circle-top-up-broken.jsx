import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d15e38t2g.css';
import '../../css/t/t2rxu0jgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d15e38t2g"/><path class="t2rxu0jgy"/></g>`,
		"fallback": "solar:circle-top-up-broken",
	});
}

export default Component;
