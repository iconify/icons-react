import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/g/g1_ishk6b.css';
import '../../css/s/s0vg7idxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f2ykp2y6k"/><path class="g1_ishk6b"/><path class="s0vg7idxu"/></g>`,
		"fallback": "icon-park-solid:double-bed",
	});
}

export default Component;
