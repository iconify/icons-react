import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/ty4u6j0oq.css';
import '../../css/v/v2-6_rbcy.css';
import '../../css/j/j62-n5bjn.css';
import '../../css/s/soa91ro3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ty4u6j0oq"/><path class="v2-6_rbcy"/><path class="j62-n5bjn"/><path class="soa91ro3l"/></g>`,
		"fallback": "icon-park:gemini",
	});
}

export default Component;
