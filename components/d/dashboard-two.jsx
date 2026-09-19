import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vjsun3t2r.css';
import '../../css/c/cowsr0b9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vjsun3t2r"/><path class="cowsr0b9x"/></g>`,
		"fallback": "icon-park-outline:dashboard-two",
	});
}

export default Component;
