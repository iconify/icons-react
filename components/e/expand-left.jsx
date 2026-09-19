import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1a7fuk7x.css';
import '../../css/o/ouk324llz.css';
import '../../css/j/jg5riebmr.css';
import '../../css/d/d99d2rtqd.css';
import '../../css/o/oy5jdmb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="a1a7fuk7x"/><path class="ouk324llz"/><path class="jg5riebmr"/><path class="d99d2rtqd"/><path class="oy5jdmb9j"/></g>`,
		"fallback": "icon-park:expand-left",
	});
}

export default Component;
