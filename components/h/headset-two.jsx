import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q2cgsdcxn.css';
import '../../css/k/k7sl3bboy.css';
import '../../css/t/ty8kmubdm.css';
import '../../css/l/lxqcwwbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q2cgsdcxn"/><path class="k7sl3bboy"/><path class="ty8kmubdm"/><path class="lxqcwwbex"/></g>`,
		"fallback": "icon-park-solid:headset-two",
	});
}

export default Component;
