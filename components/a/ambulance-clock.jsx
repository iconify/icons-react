import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvifft_3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvifft_3u"/>`,
		"fallback": "noviair:ambulance-clock",
	});
}

export default Component;
