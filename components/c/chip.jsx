import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/ncz8bbc_a.css';
import '../../css/m/mtcvzm4un.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="ncz8bbc_a"/><path class="mtcvzm4un"/></g>`,
		"fallback": "icon-park-solid:chip",
	});
}

export default Component;
