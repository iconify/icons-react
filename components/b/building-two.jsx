import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y8zaxp_tc.css';
import '../../css/g/grz7v2bip.css';
import '../../css/w/w94kgrhdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y8zaxp_tc"/><path clip-rule="evenodd" class="grz7v2bip"/><path class="w94kgrhdl"/></g>`,
		"fallback": "icon-park:building-two",
	});
}

export default Component;
