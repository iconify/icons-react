import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/odzqh-bcc.css';
import '../../css/z/zkigybchi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="odzqh-bcc"/><path class="wm-a zkigybchi"/></g>`,
		"fallback": "withicons:hash",
	});
}

export default Component;
