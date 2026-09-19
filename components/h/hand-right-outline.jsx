import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grhtrnaya.css';
import '../../css/o/ohiekfb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grhtrnaya"/><path class="ohiekfb7t"/>`,
		"fallback": "ion:hand-right-outline",
	});
}

export default Component;
