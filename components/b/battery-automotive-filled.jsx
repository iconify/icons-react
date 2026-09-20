import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q49xp1buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q49xp1buu"/>`,
		"fallback": "tabler:battery-automotive-filled",
	});
}

export default Component;
