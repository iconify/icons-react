import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m65256bwd.css';
import '../../css/i/i-5k4teut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="m65256bwd"/><circle class="i-5k4teut"/></g>`,
		"fallback": "icon-park-outline:capricornus",
	});
}

export default Component;
