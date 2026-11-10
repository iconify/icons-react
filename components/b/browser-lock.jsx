import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swmwxq7rt.css';
import '../../css/z/zrz4k_4mn.css';
import '../../css/b/bfamufl7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swmwxq7rt"/><path class="zrz4k_4mn"/><path class="bfamufl7w"/></g>`,
		"fallback": "andrsrxn:browser-lock",
	});
}

export default Component;
