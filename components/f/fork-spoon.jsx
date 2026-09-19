import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/opb5c-oie.css';
import '../../css/h/hqtmz8h1c.css';
import '../../css/i/iqzato_pz.css';
import '../../css/j/j67ab0pml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="opb5c-oie"/><path class="hqtmz8h1c"/><path class="iqzato_pz"/><path class="j67ab0pml"/></g>`,
		"fallback": "icon-park:fork-spoon",
	});
}

export default Component;
