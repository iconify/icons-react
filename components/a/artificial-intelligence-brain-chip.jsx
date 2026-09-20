import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0rbkobgm.css';
import '../../css/n/n6j57qbjf.css';
import '../../css/x/x7es_vtri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i0rbkobgm"/><path class="n6j57qbjf"/><path class="x7es_vtri"/></g>`,
		"fallback": "streamline-sharp:artificial-intelligence-brain-chip",
	});
}

export default Component;
