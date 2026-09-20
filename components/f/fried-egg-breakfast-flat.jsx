import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-765w5eo.css';
import '../../css/h/hyf7hzboc.css';
import '../../css/e/ekj6g0bsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-765w5eo"/><path class="hyf7hzboc"/><path clip-rule="evenodd" class="ekj6g0bsb"/></g>`,
		"fallback": "streamline-plump-color:fried-egg-breakfast-flat",
	});
}

export default Component;
