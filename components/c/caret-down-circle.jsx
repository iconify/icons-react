import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgtzwm3rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgtzwm3rj"/>`,
		"fallback": "bxs:caret-down-circle",
	});
}

export default Component;
