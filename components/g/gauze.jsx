import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uyseoq3ur.css';
import '../../css/x/x6mnf95_s.css';
import '../../css/q/qw1suyb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="uyseoq3ur"/><circle class="x6mnf95_s"/><path class="qw1suyb4s"/></g>`,
		"fallback": "icon-park-outline:gauze",
	});
}

export default Component;
