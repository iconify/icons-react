import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e5ys_6byi.css';
import '../../css/s/s6kk7juwe.css';
import '../../css/s/scyn38bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e5ys_6byi"/><path class="s6kk7juwe"/><path class="scyn38bvf"/></g>`,
		"fallback": "icon-park-solid:frigate",
	});
}

export default Component;
