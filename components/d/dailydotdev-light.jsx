import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcc4chb-g.css';
import '../../css/g/g2v-e666n.css';
import '../../css/w/w5gr3vtml.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lcc4chb-g"><path class="g2v-e666n"/><path class="w5gr3vtml"/></g>`,
		"fallback": "thesvg-color:dailydotdev-light",
	});
}

export default Component;
