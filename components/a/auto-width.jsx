import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wy5b9ibxs.css';
import '../../css/l/llf2nduef.css';
import '../../css/s/s71mxefap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wy5b9ibxs"/><path class="llf2nduef"/><path class="s71mxefap"/></g>`,
		"fallback": "icon-park:auto-width",
	});
}

export default Component;
