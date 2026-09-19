import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ehoj_i-_j.css';
import '../../css/p/pt7do2-ho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ehoj_i-_j"/><path class="pt7do2-ho"/></g>`,
		"fallback": "icon-park:diamond-necklace",
	});
}

export default Component;
