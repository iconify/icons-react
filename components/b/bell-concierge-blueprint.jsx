import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n6pap_bir.css';
import '../../css/h/h3xse5oqa.css';
import '../../css/x/xurpiib7h.css';
import '../../css/m/mdlqgq8-w.css';
import '../../css/o/oivip8bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n6pap_bir wm-deco"/><path class="h3xse5oqa wm-deco"/><path class="wm-deco xurpiib7h"/><path class="mdlqgq8-w wm-k"/><path class="oivip8bjf wm-a"/></g>`,
		"fallback": "withicons:bell-concierge-blueprint",
	});
}

export default Component;
