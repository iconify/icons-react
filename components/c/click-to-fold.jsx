import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xik1b2bwz.css';
import '../../css/s/sb50wfbey.css';
import '../../css/c/cldpi5btu.css';
import '../../css/j/je0y_cbze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xik1b2bwz"/><path class="sb50wfbey"/><path class="cldpi5btu"/><path class="je0y_cbze"/></g>`,
		"fallback": "icon-park:click-to-fold",
	});
}

export default Component;
