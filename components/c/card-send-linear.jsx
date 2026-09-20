import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i9s-s9bxy.css';
import '../../css/u/uwaa3xb6z.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/i/ic-2n6n4h.css';
import '../../css/a/arfwosbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i9s-s9bxy"/><path class="uwaa3xb6z"/><path class="ktpncgb0v"/><path class="ic-2n6n4h"/><path class="arfwosbro"/></g>`,
		"fallback": "solar:card-send-linear",
	});
}

export default Component;
