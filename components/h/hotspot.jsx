import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/obsscdhly.css';
import '../../css/d/dff5sqbum.css';
import '../../css/e/eibp0ub2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="obsscdhly"/><path class="dff5sqbum"/><path class="eibp0ub2o"/></g>`,
		"fallback": "hugeicons:hotspot",
	});
}

export default Component;
