import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m1q6fc66q.css';
import '../../css/r/r945hu92f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="m1q6fc66q"/><path class="r945hu92f"/></g>`,
		"fallback": "icon-park-outline:connection-arrow",
	});
}

export default Component;
