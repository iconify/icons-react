import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/c/cjjtizl0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="aoabsmt9b"/><path class="cjjtizl0b"/></g>`,
		"fallback": "icon-park-outline:instagram-one",
	});
}

export default Component;
