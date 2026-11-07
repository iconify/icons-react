import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/h/h15dvobst.css';
import '../../css/o/ol4qk2w7f.css';
import '../../css/l/ll6i-b9su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="h15dvobst"/><path class="ol4qk2w7f"/><path class="ll6i-b9su"/></g>`,
		"fallback": "solar:bookmark-off-broken",
	});
}

export default Component;
