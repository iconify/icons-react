import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw_fxrxtk.css';
import '../../css/i/ivfjhjnom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw_fxrxtk"/><path class="ivfjhjnom"/>`,
		"fallback": "circum:desktop-mouse-2",
	});
}

export default Component;
