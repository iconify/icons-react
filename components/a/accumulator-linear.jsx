import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yq5tzwbme.css';
import '../../css/s/slk4sp16n.css';
import '../../css/d/dicainbtc.css';
import '../../css/u/uibc2sgoa.css';
import '../../css/o/oid9cg9wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yq5tzwbme"/><path class="slk4sp16n"/><path class="dicainbtc"/><path class="uibc2sgoa"/><path class="oid9cg9wl"/></g>`,
		"fallback": "solar:accumulator-linear",
	});
}

export default Component;
