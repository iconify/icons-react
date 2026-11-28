import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4-e-g-q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/n/nhnwqvbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xm4-e-g-q"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="nhnwqvbuu"/></g>`,
		"fallback": "iconaut:file-pen-duo",
	});
}

export default Component;
