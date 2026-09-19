import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xwh3-0bhi.css';
import '../../css/s/s9o44zz8v.css';
import '../../css/t/t4_ftjb0l.css';
import '../../css/r/rwcph-b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xwh3-0bhi"/><path class="s9o44zz8v"/><path class="t4_ftjb0l"/><path class="rwcph-b2w"/></g>`,
		"fallback": "icon-park:briefcase",
	});
}

export default Component;
