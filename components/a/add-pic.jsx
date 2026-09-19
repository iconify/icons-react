import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol1qgland.css';
import '../../css/k/k0rioybmz.css';
import '../../css/k/ktabidctm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ol1qgland"><path class="k0rioybmz"/><path class="ktabidctm"/></g>`,
		"fallback": "icon-park-outline:add-pic",
	});
}

export default Component;
