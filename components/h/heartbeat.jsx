import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mocz155au.css';
import '../../css/z/zgjfmt9gx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mocz155au"/><path class="zgjfmt9gx"/></g>`,
		"fallback": "icon-park:heartbeat",
	});
}

export default Component;
