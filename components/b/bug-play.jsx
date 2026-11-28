import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umax9m-3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umax9m-3m"/>`,
		"fallback": "noviair:bug-play",
	});
}

export default Component;
