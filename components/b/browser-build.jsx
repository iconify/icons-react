import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyf_wuz_i.css';
import '../../css/l/lu0qoibjl.css';
import '../../css/z/zgmqv6l8n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zyf_wuz_i"/><path class="lu0qoibjl"/><path class="zgmqv6l8n"/></g>`,
		"fallback": "streamline-color:browser-build",
	});
}

export default Component;
