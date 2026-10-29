import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/un0gcky1u.css';
import '../../css/e/eo4rdebcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="un0gcky1u"/><path class="eo4rdebcb wm-a"/></g>`,
		"fallback": "withicons:case-sensitive-duo",
	});
}

export default Component;
