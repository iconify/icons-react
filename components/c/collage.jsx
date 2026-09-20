import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q41tdvb1m.css';
import '../../css/w/wvg0x2bzq.css';
import '../../css/m/myzvowxri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q41tdvb1m"/><path class="wvg0x2bzq"/><path class="myzvowxri"/></g>`,
		"fallback": "tdesign:collage",
	});
}

export default Component;
