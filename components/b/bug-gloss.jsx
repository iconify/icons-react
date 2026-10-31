import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-8ytgyeg.css';
import '../../css/e/echrkbc0t.css';
import '../../css/z/zer7usb_s.css';
import '../../css/r/rrm0jqaix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-8ytgyeg wm-k"/><path class="echrkbc0t wm-k"/><path class="wm-k zer7usb_s"/><path class="rrm0jqaix wm-a"/></g>`,
		"fallback": "withicons:bug-gloss",
	});
}

export default Component;
