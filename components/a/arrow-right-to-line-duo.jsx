import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s-orxf9cs.css';
import '../../css/z/z-jqc1b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s-orxf9cs wm-a"/><path class="z-jqc1b6a"/></g>`,
		"fallback": "withicons:arrow-right-to-line-duo",
	});
}

export default Component;
