import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_xr8uihv.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_xr8uihv"/><path class="acwejz0_o"/>`,
		"fallback": "openmoji:hand-with-fingers-splayed-medium-skin-tone",
	});
}

export default Component;
