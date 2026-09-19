import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olen39bjy.css';
import '../../css/w/wxeu8eo-m.css';
import '../../css/p/pccwq-bhm.css';
import '../../css/t/t3-90kbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olen39bjy"/><path class="wxeu8eo-m"/><path class="pccwq-bhm"/><path class="t3-90kbne"/></g>`,
		"fallback": "icon-park:hospital-three",
	});
}

export default Component;
