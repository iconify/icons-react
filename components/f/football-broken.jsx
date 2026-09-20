import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l9ejvzbai.css';
import '../../css/i/itof0i_6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l9ejvzbai"/><path class="itof0i_6q"/></g>`,
		"fallback": "solar:football-broken",
	});
}

export default Component;
