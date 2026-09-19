import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w8kvpjbaf.css';
import '../../css/j/j716il_vk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="w8kvpjbaf"/><path class="j716il_vk"/></g>`,
		"fallback": "icon-park-solid:coronavirus",
	});
}

export default Component;
