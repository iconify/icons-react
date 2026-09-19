import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xo2z99k5u.css';
import '../../css/q/qp8wrac1e.css';
import '../../css/o/ofgf3ebhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="xo2z99k5u"/><circle transform="matrix(-1 0 0 1 33.5 24.5)" class="qp8wrac1e"/><path class="ofgf3ebhn"/></g>`,
		"fallback": "icon-park-solid:glasses-one",
	});
}

export default Component;
