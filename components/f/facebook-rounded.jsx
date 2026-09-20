import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aye465brx.css';
import '../../css/u/uvd9ibb-v.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGBKAjgbpR"><path clip-rule="evenodd" class="aye465brx"/><path class="uvd9ibb-v"/></mask></defs><path mask="url(#SVGBKAjgbpR)" class="w49j0rbvv"/></g>`,
		"fallback": "lineicons:facebook-rounded",
	});
}

export default Component;
