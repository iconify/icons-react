import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o1dlosizy.css';
import '../../css/o/oadsfbb3w.css';
import '../../css/z/zaj5h4boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o1dlosizy"/><path class="oadsfbb3w wm-k"/><path class="wm-a zaj5h4boz"/></g>`,
		"fallback": "withicons:baseball-sketch",
	});
}

export default Component;
