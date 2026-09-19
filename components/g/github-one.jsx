import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/d/dvl8vktim.css';
import '../../css/j/j14g4-btm.css';
import '../../css/c/cmn4_l2kg.css';
import '../../css/q/qx21y284q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="dvl8vktim"/><path class="j14g4-btm"/><path class="cmn4_l2kg"/><path class="qx21y284q"/></g>`,
		"fallback": "icon-park:github-one",
	});
}

export default Component;
