import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f9s4vsbrh.css';
import '../../css/i/i12exnb1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f9s4vsbrh"/><path class="i12exnb1u"/></g>`,
		"fallback": "icon-park-outline:heart-rate",
	});
}

export default Component;
