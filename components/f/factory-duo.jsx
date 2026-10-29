import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rpsv5dbfy.css';
import '../../css/n/ngj96acjh.css';
import '../../css/z/z31jlbbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rpsv5dbfy"/><path class="ngj96acjh wm-a"/><path class="z31jlbbvb"/></g>`,
		"fallback": "withicons:factory-duo",
	});
}

export default Component;
