import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0rsvtb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0rsvtb7l"/>`,
		"fallback": "streamline-ultimate:family-child-play-ball-warning-bold",
	});
}

export default Component;
