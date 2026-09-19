import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g0b7dcc4g.css';
import '../../css/k/kblvoyb5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g0b7dcc4g"/><path class="kblvoyb5g"/></g>`,
		"fallback": "icon-park-outline:efferent-three",
	});
}

export default Component;
