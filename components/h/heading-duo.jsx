import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fed5n4npn.css';
import '../../css/v/vslz5yb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fed5n4npn"/><path class="vslz5yb3q wm-a"/></g>`,
		"fallback": "withicons:heading-duo",
	});
}

export default Component;
