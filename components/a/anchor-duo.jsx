import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvtmaim2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9n9pbc4q.css';
import '../../css/h/h_4d8jb-p.css';
import '../../css/w/wo3xrrbug.css';
import '../../css/r/rzhs8zm0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tvtmaim2s"/><g class="dt0cm9dhy primary"><circle class="y9n9pbc4q"/><path class="h_4d8jb-p"/><path class="wo3xrrbug"/><path class="rzhs8zm0g"/></g>`,
		"fallback": "iconaut:anchor-duo",
	});
}

export default Component;
