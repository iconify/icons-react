import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h5agcw4yc.css';
import '../../css/v/v26v1bc-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h5agcw4yc"/><path class="v26v1bc-b"/></g>`,
		"fallback": "iconamoon:history-thin",
	});
}

export default Component;
