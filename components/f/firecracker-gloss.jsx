import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y13z_zbwg.css';
import '../../css/b/bupjy3gdf.css';
import '../../css/y/yrptk-5tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k y13z_zbwg"/><path class="bupjy3gdf wm-a"/><path class="wm-deco yrptk-5tw"/></g>`,
		"fallback": "withicons:firecracker-gloss",
	});
}

export default Component;
