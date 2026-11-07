import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owzpq1dsn.css';
import '../../css/y/ya4v2ogmm.css';
import '../../css/h/hzret1bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="owzpq1dsn"/><path class="ya4v2ogmm"/><path class="hzret1bgp"/></g>`,
		"fallback": "solar:golf-broken",
	});
}

export default Component;
