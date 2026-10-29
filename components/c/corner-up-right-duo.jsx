import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ko9c-gbhs.css';
import '../../css/r/rakss8bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ko9c-gbhs"/><path class="rakss8bxv wm-a"/></g>`,
		"fallback": "withicons:corner-up-right-duo",
	});
}

export default Component;
