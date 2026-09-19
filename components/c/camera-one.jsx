import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yez7skblq.css';
import '../../css/v/vydujvb8s.css';
import '../../css/h/h2uo0wbmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="yez7skblq"/><circle class="vydujvb8s"/><path class="h2uo0wbmx"/></g>`,
		"fallback": "icon-park-solid:camera-one",
	});
}

export default Component;
