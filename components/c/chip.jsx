import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t33e60pja.css';
import '../../css/m/mtcvzm4un.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="t33e60pja"/><path class="mtcvzm4un"/></g>`,
		"fallback": "icon-park-outline:chip",
	});
}

export default Component;
