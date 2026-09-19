import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4zmn1p_s.css';
import '../../css/r/rofyg_nub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4zmn1p_s"/><path class="rofyg_nub"/></g>`,
		"fallback": "icon-park-outline:clothes-gloves",
	});
}

export default Component;
