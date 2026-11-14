import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/da4g6hbex.css';
import '../../css/v/vljdqrb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="da4g6hbex"/><path class="vljdqrb7p"/></g>`,
		"fallback": "hugeicons:call-locked",
	});
}

export default Component;
