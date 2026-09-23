import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vmd8dr46i.css';
import '../../css/b/bx-7x9snt.css';
import '../../css/c/c6upwkbge.css';
import '../../css/h/h82j8jb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vmd8dr46i"/><path class="bx-7x9snt"/><path class="c6upwkbge"/><path class="h82j8jb4j"/></g>`,
		"fallback": "keyline-icons:chart-bar-sparkles-sharp-duotone",
	});
}

export default Component;
