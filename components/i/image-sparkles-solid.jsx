import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t72y6tbkx.css';
import '../../css/a/a9kp92bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t72y6tbkx"/><path class="a9kp92bhy wm-s"/></g>`,
		"fallback": "withicons:image-sparkles-solid",
	});
}

export default Component;
