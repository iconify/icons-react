import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ab_9pivlh.css';
import '../../css/b/bf3cxvlkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ab_9pivlh"/><path class="bf3cxvlkw"/></g>`,
		"fallback": "withicons:git-commit-duo",
	});
}

export default Component;
