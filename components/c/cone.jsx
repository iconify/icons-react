import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/amd3c_7ux.css';
import '../../css/a/azfqzgbgh.css';
import '../../css/l/l6kmrgbaq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><ellipse class="amd3c_7ux"/><path class="azfqzgbgh"/><path class="l6kmrgbaq"/></g>`,
		"fallback": "icon-park-outline:cone",
	});
}

export default Component;
