import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d_ssvo4cj.css';
import '../../css/c/cx-drzi7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d_ssvo4cj"/><path class="cx-drzi7n"/></g>`,
		"fallback": "icon-park-outline:graphic-stitching-three",
	});
}

export default Component;
