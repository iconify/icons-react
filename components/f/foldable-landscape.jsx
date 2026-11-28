import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wwfqf9bjp.css';
import '../../css/r/r2rg25b2s.css';
import '../../css/f/f8dnxibrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wwfqf9bjp"/><path class="r2rg25b2s"/><path class="f8dnxibrd"/></g>`,
		"fallback": "iconaut:foldable-landscape",
	});
}

export default Component;
