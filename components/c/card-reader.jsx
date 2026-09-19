import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e824nmyse.css';
import '../../css/t/tp6mttbwd.css';
import '../../css/m/mapw8zb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e824nmyse"/><path class="tp6mttbwd"/><path class="mapw8zb5u"/></g>`,
		"fallback": "iconoir:card-reader",
	});
}

export default Component;
