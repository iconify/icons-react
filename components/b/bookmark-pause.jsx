import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njo9wm2aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njo9wm2aa"/>`,
		"fallback": "tabler:bookmark-pause",
	});
}

export default Component;
