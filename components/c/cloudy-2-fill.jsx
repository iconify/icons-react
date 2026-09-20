import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_mh1h_-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_mh1h_-i"/>`,
		"fallback": "ri:cloudy-2-fill",
	});
}

export default Component;
