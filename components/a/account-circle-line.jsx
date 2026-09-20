import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnmvl1dlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnmvl1dlp"/>`,
		"fallback": "ri:account-circle-line",
	});
}

export default Component;
