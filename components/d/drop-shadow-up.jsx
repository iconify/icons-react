import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u5v2m0bli.css';
import '../../css/k/kwzrzeqtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="u5v2m0bli"/><path class="kwzrzeqtd"/></g>`,
		"fallback": "icon-park-solid:drop-shadow-up",
	});
}

export default Component;
