import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0z1dup4u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g41oqhzpy.css';
import '../../css/i/ixg3tzbda.css';
import '../../css/b/bm702pbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0z1dup4u secondary"/><g class="dt0cm9dhy primary"><path class="g41oqhzpy"/><path class="ixg3tzbda"/><path class="bm702pbyv"/></g>`,
		"fallback": "iconaut:file-video-duo",
	});
}

export default Component;
