import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e08nudb7u.css';
import '../../css/p/p1r24hbgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e08nudb7u"/><rect class="p1r24hbgd"/></g>`,
		"fallback": "icon-park-solid:commuter-bag",
	});
}

export default Component;
