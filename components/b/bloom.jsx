import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/miu64ybug.css';
import '../../css/m/m9j-jmwzn.css';
import '../../css/b/b29kr7l6m.css';
import '../../css/o/otjxx9bcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="miu64ybug"/><path class="m9j-jmwzn"/><path class="b29kr7l6m"/><path class="otjxx9bcl"/></g>`,
		"fallback": "icon-park:bloom",
	});
}

export default Component;
