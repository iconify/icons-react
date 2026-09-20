import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jb529cc9m.css';
import '../../css/l/l3t5aobdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jb529cc9m"/><path class="l3t5aobdc"/></g>`,
		"fallback": "streamline-sharp-color:computer-chip-1",
	});
}

export default Component;
