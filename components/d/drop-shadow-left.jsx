import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/txlt8ubwr.css';
import '../../css/p/pvol4__sc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="txlt8ubwr"/><path class="pvol4__sc"/></g>`,
		"fallback": "icon-park-outline:drop-shadow-left",
	});
}

export default Component;
