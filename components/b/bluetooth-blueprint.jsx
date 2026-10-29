import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hngrqwb5t.css';
import '../../css/f/fcyg8zbdc.css';
import '../../css/o/o3ggb2czz.css';
import '../../css/m/mwcb5wb9h.css';
import '../../css/s/saxk-lbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hngrqwb5t wm-deco"/><path class="fcyg8zbdc wm-deco"/><path class="o3ggb2czz wm-deco"/><path class="mwcb5wb9h"/><path class="saxk-lbfy"/></g>`,
		"fallback": "withicons:bluetooth-blueprint",
	});
}

export default Component;
