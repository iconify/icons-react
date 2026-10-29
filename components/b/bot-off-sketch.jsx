import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gz9pi8bqa.css';
import '../../css/e/e3o0ig38m.css';
import '../../css/e/ev0fqeb1j.css';
import '../../css/z/zw944ab4t.css';
import '../../css/g/g41fysqtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gz9pi8bqa wm-k"/><path class="e3o0ig38m wm-k"/><path class="ev0fqeb1j wm-a"/><path class="wm-a zw944ab4t"/><path class="g41fysqtd wm-s"/></g>`,
		"fallback": "withicons:bot-off-sketch",
	});
}

export default Component;
