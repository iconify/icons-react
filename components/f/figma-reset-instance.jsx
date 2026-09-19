import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xi01rxbal.css';
import '../../css/c/ccnbmpbeo.css';
import '../../css/w/wggo06bzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xi01rxbal"/><path class="ccnbmpbeo"/><path class="wggo06bzf"/></g>`,
		"fallback": "icon-park-outline:figma-reset-instance",
	});
}

export default Component;
