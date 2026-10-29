import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n2akhfbpl.css';
import '../../css/e/eg_tgsusb.css';
import '../../css/o/og01tokas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n2akhfbpl"/><path class="eg_tgsusb"/><path class="og01tokas wm-a"/></g>`,
		"fallback": "withicons:hand-heart",
	});
}

export default Component;
