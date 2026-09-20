import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc32_2shk.css';
import '../../css/c/cfya0ubty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc32_2shk"/><path class="cfya0ubty"/>`,
		"fallback": "stash:arrows-switch-duotone",
	});
}

export default Component;
