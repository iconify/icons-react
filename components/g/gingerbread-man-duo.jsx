import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/flxbooo2l.css';
import '../../css/u/u5k-jlbkg.css';
import '../../css/v/vgfot6b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="flxbooo2l"/><path class="u5k-jlbkg wm-a"/><path class="vgfot6b_w"/></g>`,
		"fallback": "withicons:gingerbread-man-duo",
	});
}

export default Component;
