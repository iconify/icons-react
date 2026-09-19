import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u80ovujow.css';
import '../../css/b/b8ax9pbxl.css';
import '../../css/x/xzng-4bwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="u80ovujow"/><path class="b8ax9pbxl"/><path class="xzng-4bwi"/></g>`,
		"fallback": "icon-park-outline:candy",
	});
}

export default Component;
