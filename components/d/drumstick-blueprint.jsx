import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/po3bmtbvj.css';
import '../../css/n/ndxuxvb-e.css';
import '../../css/t/tm_04vaby.css';
import '../../css/e/e00i2wuae.css';
import '../../css/u/uezxuccqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="po3bmtbvj wm-deco"/><path class="ndxuxvb-e wm-deco"/><path class="tm_04vaby wm-deco"/><path class="e00i2wuae wm-k"/><path class="uezxuccqj wm-a"/></g>`,
		"fallback": "withicons:drumstick-blueprint",
	});
}

export default Component;
