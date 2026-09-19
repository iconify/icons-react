import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bxqc1kmci.css';
import '../../css/d/dq5cugb8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bxqc1kmci"/><path class="dq5cugb8z"/></g>`,
		"fallback": "icon-park-solid:clothes-turtleneck",
	});
}

export default Component;
