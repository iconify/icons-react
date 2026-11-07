import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k66tt2kvs.css';
import '../../css/c/c25lkgbgb.css';
import '../../css/c/ca5b8gbur.css';
import '../../css/k/kvdjm4bsr.css';
import '../../css/r/rwnv8qbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k66tt2kvs"/><path class="c25lkgbgb"/><path class="ca5b8gbur"/><path class="kvdjm4bsr"/><path class="rwnv8qbti"/></g>`,
		"fallback": "solar:case-round-minimalistic-linear",
	});
}

export default Component;
