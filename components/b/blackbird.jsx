import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnfp1rbnh.css';
import '../../css/j/jqybykbaa.css';
import '../../css/k/k1mlrwgwb.css';
import '../../css/v/vvua9h16q.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="gnfp1rbnh"/><path clip-rule="evenodd" class="jqybykbaa"/><path class="k1mlrwgwb"/><path clip-rule="evenodd" class="vvua9h16q"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "fluent-emoji-high-contrast:blackbird",
	});
}

export default Component;
