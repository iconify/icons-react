import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ien5a9bqu.css';
import '../../css/q/qo1kshy0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ien5a9bqu"/><path class="qo1kshy0a"/></g>`,
		"fallback": "iconaut:chevrons-up-down-duo",
	});
}

export default Component;
