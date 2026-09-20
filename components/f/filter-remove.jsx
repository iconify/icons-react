import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q-eob553s.css';
import '../../css/m/m__pa4blm.css';
import '../../css/z/zaw73nbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="q-eob553s"/><path class="m__pa4blm"/><path class="zaw73nbiu"/></g>`,
		"fallback": "reicon:filter-remove",
	});
}

export default Component;
