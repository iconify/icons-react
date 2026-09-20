import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3ahtubtz.css';
import '../../css/h/h-h-argoo.css';
import '../../css/q/qgxak08we.css';
import '../../css/r/r7i5pw7pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3ahtubtz"/><path class="h-h-argoo"/><path class="qgxak08we"/><path class="r7i5pw7pz"/></g>`,
		"fallback": "solar:clapperboard-open-broken",
	});
}

export default Component;
