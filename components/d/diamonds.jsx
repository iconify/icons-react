import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p4o9bsbmc.css';
import '../../css/i/ikqbc8xkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="p4o9bsbmc"/><path class="ikqbc8xkq"/></g>`,
		"fallback": "icon-park-outline:diamonds",
	});
}

export default Component;
