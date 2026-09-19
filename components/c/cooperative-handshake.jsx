import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cglwi_50n.css';
import '../../css/y/y0cqvrbez.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cglwi_50n"/><path class="y0cqvrbez"/></g>`,
		"fallback": "icon-park-outline:cooperative-handshake",
	});
}

export default Component;
