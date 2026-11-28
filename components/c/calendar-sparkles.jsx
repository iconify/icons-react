import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f32u92wnr.css';
import '../../css/r/rpixg5b7g.css';
import '../../css/r/rp-107qrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f32u92wnr"/><path class="rpixg5b7g"/><path class="rp-107qrc"/></g>`,
		"fallback": "iconaut:calendar-sparkles",
	});
}

export default Component;
