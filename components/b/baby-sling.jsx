import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sgouetkcw.css';
import '../../css/f/fqgji9b2o.css';
import '../../css/p/plqe-22_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="sgouetkcw"/><path class="fqgji9b2o"/><path class="plqe-22_l"/></g>`,
		"fallback": "icon-park-solid:baby-sling",
	});
}

export default Component;
