import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jycvn840o.css';
import '../../css/y/y3xg51wix.css';
import '../../css/p/pqa1ftavv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jycvn840o"/><path class="y3xg51wix"/><path class="pqa1ftavv"/></g>`,
		"fallback": "icon-park-outline:beach-umbrella",
	});
}

export default Component;
