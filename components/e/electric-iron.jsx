import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bw4wgduwd.css';
import '../../css/j/j189wtlhc.css';
import '../../css/f/flza1qbgb.css';
import '../../css/g/g2_t03b5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bw4wgduwd"/><circle class="j189wtlhc"/><path class="flza1qbgb"/><path class="g2_t03b5a"/></g>`,
		"fallback": "icon-park-outline:electric-iron",
	});
}

export default Component;
