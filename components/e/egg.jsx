import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u80ovujow.css';
import '../../css/w/w0ggckbeu.css';
import '../../css/p/p7b_6qbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="u80ovujow"/><path class="w0ggckbeu"/><path class="p7b_6qbai"/></g>`,
		"fallback": "icon-park-outline:egg",
	});
}

export default Component;
