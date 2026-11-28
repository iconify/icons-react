import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y57400b9h.css';
import '../../css/b/bue-mrlhv.css';
import '../../css/v/v5wkezbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y57400b9h"/><path class="bue-mrlhv"/><path class="v5wkezbbg"/></g>`,
		"fallback": "iconaut:arrow-u-turn-right-line-duo",
	});
}

export default Component;
