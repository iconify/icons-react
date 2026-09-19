import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/ru8s1dvas.css';
import '../../css/l/lemb12btl.css';
import '../../css/p/plqe-22_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="ru8s1dvas"/><path class="lemb12btl"/><path class="plqe-22_l"/></g>`,
		"fallback": "icon-park-outline:baby-sling",
	});
}

export default Component;
