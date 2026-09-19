import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgkg3lb2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgkg3lb2e"/>`,
		"fallback": "ion:chevron-down-circle",
	});
}

export default Component;
