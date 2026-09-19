import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/x/x901lharp.css';
import '../../css/k/k-42yk6zs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="x901lharp"/><path class="k-42yk6zs"/></g>`,
		"fallback": "icon-park-outline:data-switching",
	});
}

export default Component;
