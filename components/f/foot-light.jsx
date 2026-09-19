import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ounxby0eh.css';
import '../../css/r/rs61gez4m.css';
import '../../css/a/axicx3eyc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ounxby0eh"/><path class="rs61gez4m"/><path class="axicx3eyc"/></g>`,
		"fallback": "fluent-emoji-flat:foot-light",
	});
}

export default Component;
