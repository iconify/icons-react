import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj_-u5bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj_-u5bwy"/>`,
		"fallback": "stash:arrow-up",
	});
}

export default Component;
