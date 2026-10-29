import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nyk5y_bav.css';
import '../../css/e/en16n72hg.css';
import '../../css/o/og01tokas.css';
import '../../css/n/n2akhfbpl.css';
import '../../css/e/eg_tgsusb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nyk5y_bav wm-a"/><path class="en16n72hg"/><path class="og01tokas wm-a"/><path class="n2akhfbpl"/><path class="eg_tgsusb"/></g>`,
		"fallback": "withicons:hand-heart-duo",
	});
}

export default Component;
