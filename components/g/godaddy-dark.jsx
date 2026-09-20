import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr7fluyjp.css';
import '../../css/k/k295tibms.css';

const viewBox = {"width":166,"height":34};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr7fluyjp prefix__path-mobile"/><path class="k295tibms prefix__path-desktop"/>`,
		"fallback": "thesvg-color:godaddy-dark",
	});
}

export default Component;
