import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y200nyy4c.css';
import '../../css/t/tn5vw1rfn.css';
import '../../css/c/cmpm5kb0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y200nyy4c"/><path class="tn5vw1rfn"/><path clip-rule="evenodd" class="cmpm5kb0f"/></g>`,
		"fallback": "healthicons:blood-a-p",
	});
}

export default Component;
