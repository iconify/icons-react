import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/frt305boh.css';
import '../../css/w/wux2qh75e.css';
import '../../css/h/hdzvcloyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="frt305boh"/><path class="wux2qh75e"/><path class="hdzvcloyr"/></g>`,
		"fallback": "icon-park-outline:garage",
	});
}

export default Component;
