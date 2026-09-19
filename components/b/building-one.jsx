import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jny-57qfz.css';
import '../../css/f/f7dt8db0j.css';
import '../../css/w/w94kgrhdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="jny-57qfz"/><path class="f7dt8db0j"/><path class="w94kgrhdl"/></g>`,
		"fallback": "icon-park:building-one",
	});
}

export default Component;
