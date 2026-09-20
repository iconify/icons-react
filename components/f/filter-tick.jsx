import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e35pomtwe.css';
import '../../css/v/vd6q9kbib.css';
import '../../css/m/mrj31bc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e35pomtwe"/><path class="vd6q9kbib"/><path class="mrj31bc2g"/></g>`,
		"fallback": "reicon:filter-tick",
	});
}

export default Component;
