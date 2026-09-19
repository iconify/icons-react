import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkyt__bov.css';
import '../../css/y/yerm5_p6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkyt__bov"/><path clip-rule="evenodd" class="yerm5_p6i"/>`,
		"fallback": "basil:gamepad-outline",
	});
}

export default Component;
