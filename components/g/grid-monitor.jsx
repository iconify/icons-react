import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b4-3i7bzk.css';
import '../../css/j/jwg7gfb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b4-3i7bzk"/><path class="jwg7gfb-s"/></g>`,
		"fallback": "streamline-freehand:grid-monitor",
	});
}

export default Component;
