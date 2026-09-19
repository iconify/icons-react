import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/p/peniq4-zy.css';
import '../../css/c/cn0m6ebzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><path class="peniq4-zy"/><path class="cn0m6ebzb"/></g>`,
		"fallback": "iconamoon:folder-video-bold",
	});
}

export default Component;
