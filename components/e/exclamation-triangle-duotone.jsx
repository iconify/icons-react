import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl1padfwm.css';
import '../../css/j/j2w1i02yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl1padfwm"/><path class="j2w1i02yo"/>`,
		"fallback": "stash:exclamation-triangle-duotone",
	});
}

export default Component;
