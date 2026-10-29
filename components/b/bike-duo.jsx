import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/ndmlnv50k.css';
import '../../css/j/jyibtv-4l.css';
import '../../css/w/w1azbvbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ndmlnv50k"/><path class="jyibtv-4l"/><path class="w1azbvbkb wm-a"/></g>`,
		"fallback": "withicons:bike-duo",
	});
}

export default Component;
