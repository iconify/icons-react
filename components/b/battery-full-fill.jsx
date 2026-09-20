import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yxuwygbes.css';
import '../../css/v/vwx95215b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="yxuwygbes"/><path class="vwx95215b"/></g>`,
		"fallback": "keyline-icons:battery-full-fill",
	});
}

export default Component;
