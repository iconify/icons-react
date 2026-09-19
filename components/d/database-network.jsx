import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jo1zsubfb.css';
import '../../css/l/lcee_744z.css';
import '../../css/i/igiiosbvy.css';
import '../../css/h/h71slzdql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jo1zsubfb"/><path class="lcee_744z"/><path class="igiiosbvy"/><path class="h71slzdql"/></g>`,
		"fallback": "icon-park-solid:database-network",
	});
}

export default Component;
