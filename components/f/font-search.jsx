import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/egyq1pb4f.css';
import '../../css/y/yfgog0bsg.css';
import '../../css/r/rwr7r_b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><circle class="egyq1pb4f"/><path class="yfgog0bsg"/><path class="rwr7r_b4q"/></g>`,
		"fallback": "icon-park-outline:font-search",
	});
}

export default Component;
