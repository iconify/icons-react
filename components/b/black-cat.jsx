import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx8o-n15m.css';
import '../../css/t/t7awbjbhd.css';
import '../../css/w/wxhvyjbat.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx8o-n15m"/><path class="t7awbjbhd"/><path class="wxhvyjbat"/></g>`,
		"fallback": "fluent-emoji-flat:black-cat",
	});
}

export default Component;
