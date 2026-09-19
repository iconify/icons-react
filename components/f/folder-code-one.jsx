import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/p/pzvgm_lxf.css';
import '../../css/p/pxh5q5bfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="pzvgm_lxf"/><path class="pxh5q5bfp"/></g>`,
		"fallback": "icon-park:folder-code-one",
	});
}

export default Component;
