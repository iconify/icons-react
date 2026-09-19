import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nprab3b2b.css';
import '../../css/m/m8_bvpf3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nprab3b2b"/><path class="m8_bvpf3c"/></g>`,
		"fallback": "icon-park-solid:checkerboard",
	});
}

export default Component;
