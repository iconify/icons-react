import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v6i6r241r.css';
import '../../css/e/e2qe2xbzh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="v6i6r241r"/><path class="e2qe2xbzh"/></g>`,
		"fallback": "icon-park:corner-left-down",
	});
}

export default Component;
