import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpoubbo_e.css';
import '../../css/f/fiqo5rbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpoubbo_e"/><path class="fiqo5rbuk"/>`,
		"fallback": "boxicons:dice-5",
	});
}

export default Component;
