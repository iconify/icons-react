import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drm_ukbwq.css';
import '../../css/z/z133j9bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drm_ukbwq"/><path class="z133j9bxh"/></g>`,
		"fallback": "pixelarticons:flag",
	});
}

export default Component;
