import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gc_7g0etu.css';
import '../../css/p/pm3acfw_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="gc_7g0etu"/><path class="pm3acfw_o"/></g>`,
		"fallback": "reicon:cloud-fog",
	});
}

export default Component;
