import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q0_4c0bwj.css';
import '../../css/x/xx-w1p09b.css';
import '../../css/g/gl91pxq4m.css';
import '../../css/y/yn6dafa7n.css';
import '../../css/s/szrkkkb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q0_4c0bwj"/><path class="xx-w1p09b"/><path class="gl91pxq4m"/><path class="yn6dafa7n"/><path class="szrkkkb6h"/></g>`,
		"fallback": "icon-park-outline:four-round-point-connection",
	});
}

export default Component;
