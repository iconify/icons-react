import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d439k-qwv.css';
import '../../css/i/i3cltkb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d439k-qwv"/><path class="i3cltkb9x"/></g>`,
		"fallback": "icon-park-solid:graphic-stitching-four",
	});
}

export default Component;
