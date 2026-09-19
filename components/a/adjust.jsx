import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdkkambso.css';
import '../../css/y/y97y8fbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdkkambso"/><path class="y97y8fbxi"/>`,
		"fallback": "bx:adjust",
	});
}

export default Component;
