import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yepducc3d.css';
import '../../css/v/v-pxzl4xl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yepducc3d"/><path class="v-pxzl4xl"/></g>`,
		"fallback": "healthicons:global-pandemic2x-outline",
	});
}

export default Component;
