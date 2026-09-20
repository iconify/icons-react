import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/k/km89zu55w.css';
import '../../css/y/yok_vw5pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="km89zu55w"/><path class="yok_vw5pk"/></g>`,
		"fallback": "reicon:import5",
	});
}

export default Component;
