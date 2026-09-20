import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udsm0l3hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udsm0l3hq"/>`,
		"fallback": "tabler:egg-cracked-filled",
	});
}

export default Component;
