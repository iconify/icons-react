import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ewujkmbst.css';
import '../../css/u/uu97nydpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ewujkmbst"/><rect class="uu97nydpu"/></g>`,
		"fallback": "icon-park:chart-pie-one",
	});
}

export default Component;
