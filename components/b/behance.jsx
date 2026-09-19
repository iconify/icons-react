import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gw0gcy2dh.css';
import '../../css/i/idyp2ss1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="gw0gcy2dh"/><path class="idyp2ss1r"/></g>`,
		"fallback": "icon-park-outline:behance",
	});
}

export default Component;
