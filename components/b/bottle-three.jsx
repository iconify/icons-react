import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/msu6hmnwe.css';
import '../../css/x/xhe52bciu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="msu6hmnwe"/><rect class="xhe52bciu"/></g>`,
		"fallback": "icon-park-outline:bottle-three",
	});
}

export default Component;
