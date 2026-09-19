import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt_ut7wjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt_ut7wjf"/>`,
		"fallback": "game-icons:banana",
	});
}

export default Component;
