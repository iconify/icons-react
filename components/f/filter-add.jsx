import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/m/mdmvytbbu.css';
import '../../css/z/zaw73nbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="mdmvytbbu"/><path class="zaw73nbiu"/></g>`,
		"fallback": "reicon:filter-add",
	});
}

export default Component;
