import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2zjwor-m.css';
import '../../css/t/tc57l1bxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2zjwor-m"/><path class="tc57l1bxm"/>`,
		"fallback": "fxemoji:doveofpeace",
	});
}

export default Component;
