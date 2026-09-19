import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urswrcbmq.css';
import '../../css/t/t211_glzn.css';
import '../../css/s/sectwdvrp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="urswrcbmq"/><path class="t211_glzn"/><ellipse class="sectwdvrp"/></g>`,
		"fallback": "garden:globe-stroke-16",
	});
}

export default Component;
