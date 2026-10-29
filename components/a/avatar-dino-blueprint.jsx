import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hbwf3nbad.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/i/i2h8khgsx.css';
import '../../css/o/o75ukvbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hbwf3nbad wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="i2h8khgsx wm-k"/><circle class="o75ukvbpp wm-k"/></g>`,
		"fallback": "withicons:avatar-dino-blueprint",
	});
}

export default Component;
