import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6r5wbyh.css';
import '../../css/t/t6f_l4ajh.css';
import '../../css/b/byt1gqb4y.css';
import '../../css/p/p94ue57rj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6r5wbyh"/><path class="t6f_l4ajh"/><path class="byt1gqb4y"/><path class="p94ue57rj"/>`,
		"fallback": "energy-icons:e-motorcycle-48",
	});
}

export default Component;
