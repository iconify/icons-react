import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t9aehzbab.css';
import '../../css/z/znwp9k_ns.css';
import '../../css/v/vb8zd0m5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t9aehzbab"/><path class="znwp9k_ns"/><path class="vb8zd0m5w"/></g>`,
		"fallback": "icon-park:hanger-two",
	});
}

export default Component;
