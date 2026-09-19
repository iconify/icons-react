import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/n30u93bfw.css';
import '../../css/u/uxhytcbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="n30u93bfw"/><path class="uxhytcbhx"/></g>`,
		"fallback": "icon-park-outline:backpack",
	});
}

export default Component;
