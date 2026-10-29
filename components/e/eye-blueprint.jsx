import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tjyng8iib.css';
import '../../css/z/z7qz8pbpc.css';
import '../../css/m/mnfeitrok.css';
import '../../css/j/jvpslgbsc.css';
import '../../css/w/wh0zujbon.css';
import '../../css/s/swjvgl4kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tjyng8iib wm-deco"/><path class="wm-deco z7qz8pbpc"/><path class="mnfeitrok wm-deco"/><path class="jvpslgbsc wm-k"/><path class="wh0zujbon wm-a"/><path class="swjvgl4kp wm-k"/></g>`,
		"fallback": "withicons:eye-blueprint",
	});
}

export default Component;
