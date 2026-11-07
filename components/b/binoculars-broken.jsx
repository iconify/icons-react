import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jsh7jib3y.css';
import '../../css/n/n7mec0bwr.css';
import '../../css/h/hf2jg-64g.css';
import '../../css/s/sqz4f0acc.css';
import '../../css/p/p_ni59b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jsh7jib3y"/><path class="n7mec0bwr"/><path class="hf2jg-64g"/><path class="sqz4f0acc"/><path class="p_ni59b0m"/></g>`,
		"fallback": "solar:binoculars-broken",
	});
}

export default Component;
