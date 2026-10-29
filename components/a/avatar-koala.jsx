import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p61yw8uba.css';
import '../../css/g/g_x203bjf.css';
import '../../css/e/egfkty-mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p61yw8uba"/><path class="g_x203bjf"/><path class="egfkty-mb wm-a"/></g>`,
		"fallback": "withicons:avatar-koala",
	});
}

export default Component;
