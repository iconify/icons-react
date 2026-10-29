import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrm8jlzgh.css';
import '../../css/m/m5u5l5b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jrm8jlzgh"/><path class="m5u5l5b7g wm-a"/></g>`,
		"fallback": "withicons:drill",
	});
}

export default Component;
