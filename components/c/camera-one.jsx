import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yez7skblq.css';
import '../../css/s/s8a25vbbq.css';
import '../../css/t/twex32ghj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="yez7skblq"/><circle class="s8a25vbbq"/><path class="twex32ghj"/></g>`,
		"fallback": "icon-park:camera-one",
	});
}

export default Component;
