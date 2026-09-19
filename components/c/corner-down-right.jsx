import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eo1c2mb1z.css';
import '../../css/b/b9em1-hoc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eo1c2mb1z"/><path class="b9em1-hoc"/></g>`,
		"fallback": "icon-park:corner-down-right",
	});
}

export default Component;
