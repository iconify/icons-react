import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nlbfqsa6d.css';
import '../../css/t/t8pf0gk5g.css';
import '../../css/j/jqg226l7r.css';
import '../../css/h/hfgrowsuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nlbfqsa6d"/><path class="t8pf0gk5g wm-k"/><path class="jqg226l7r wm-a"/><path class="hfgrowsuv wm-k"/></g>`,
		"fallback": "withicons:broom-sketch",
	});
}

export default Component;
