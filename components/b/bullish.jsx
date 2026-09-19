import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-pheobkb.css';
import '../../css/e/elhycobjb.css';
import '../../css/a/aetqlzb3s.css';
import '../../css/r/ri-i9cbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-pheobkb"/><g class="elhycobjb"><path class="aetqlzb3s"/><path class="ri-i9cbrs"/></g>`,
		"fallback": "flat-color-icons:bullish",
	});
}

export default Component;
