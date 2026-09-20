import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uurj7xe-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uurj7xe-w"/>`,
		"fallback": "mdi:clapperboard-play-outline",
	});
}

export default Component;
