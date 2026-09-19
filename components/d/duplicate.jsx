import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbnvaacxi.css';
import '../../css/b/bgnsygbap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbnvaacxi"/><path class="bgnsygbap"/>`,
		"fallback": "famicons:duplicate",
	});
}

export default Component;
