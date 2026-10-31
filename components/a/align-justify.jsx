import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uinqr2b-o.css';
import '../../css/a/ajt7ncb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uinqr2b-o"/><path class="ajt7ncb_s"/></g>`,
		"fallback": "withicons-retro:align-justify",
	});
}

export default Component;
