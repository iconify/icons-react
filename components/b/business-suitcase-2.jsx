import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxuit9pfo.css';
import '../../css/o/oqmenpqsw.css';
import '../../css/v/vdz4o3b3b.css';
import '../../css/u/ujg-f0isq.css';
import '../../css/b/by7wqhbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxuit9pfo"/><path class="oqmenpqsw"/><path class="vdz4o3b3b"/><path class="ujg-f0isq"/><path class="by7wqhbhi"/></g>`,
		"fallback": "streamline-cyber-color:business-suitcase-2",
	});
}

export default Component;
