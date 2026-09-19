import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u_y8r8pnm.css';
import '../../css/c/cohbn0bma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="u_y8r8pnm"/><path class="cohbn0bma"/></g>`,
		"fallback": "icon-park-outline:cake-three",
	});
}

export default Component;
