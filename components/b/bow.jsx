import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bmx2kpbdt.css';
import '../../css/w/ww1h5jiva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bmx2kpbdt"/><path class="ww1h5jiva"/></g>`,
		"fallback": "icon-park-solid:bow",
	});
}

export default Component;
