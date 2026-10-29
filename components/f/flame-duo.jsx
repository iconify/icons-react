import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fvhj1mbod.css';
import '../../css/b/bmlr6ob0i.css';
import '../../css/l/lb5z5tb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fvhj1mbod"/><path class="bmlr6ob0i wm-a"/><path class="lb5z5tb2v"/></g>`,
		"fallback": "withicons:flame-duo",
	});
}

export default Component;
