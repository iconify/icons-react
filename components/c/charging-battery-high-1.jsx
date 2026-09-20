import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dj-_e2gvt.css';
import '../../css/r/rvluz5bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dj-_e2gvt"/><path class="rvluz5bww"/></g>`,
		"fallback": "streamline-freehand:charging-battery-high-1",
	});
}

export default Component;
