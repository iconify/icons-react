import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m8jst2b2y.css';
import '../../css/y/ya3ntxb4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="m8jst2b2y"/><path class="ya3ntxb4w"/></g>`,
		"fallback": "icon-park:arrow-left-up",
	});
}

export default Component;
