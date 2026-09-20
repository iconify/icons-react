import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-5ei8b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-5ei8b4q"/>`,
		"fallback": "streamline-ultimate:google-analytics-logo-bold",
	});
}

export default Component;
