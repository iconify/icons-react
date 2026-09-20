import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nsdvgu6nr.css';
import '../../css/j/jhel0bbvx.css';
import '../../css/r/rd9eu4bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nsdvgu6nr"/><path class="jhel0bbvx"/><path class="rd9eu4bnd"/></g>`,
		"fallback": "streamline-sharp-color:graph-dot",
	});
}

export default Component;
