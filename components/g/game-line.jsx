import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1-n0612v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1-n0612v"/>`,
		"fallback": "ri:game-line",
	});
}

export default Component;
