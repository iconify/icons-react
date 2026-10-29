import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xk5ypzb3z.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/r/rnnsb1bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm-a xk5ypzb3z"/><path class="h6_1hfvax"/><path class="rnnsb1bql wm-a"/></g>`,
		"fallback": "withicons:cupid-bow-duo",
	});
}

export default Component;
