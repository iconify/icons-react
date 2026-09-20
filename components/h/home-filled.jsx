import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg0g_ibbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg0g_ibbe"/>`,
		"fallback": "weui:home-filled",
	});
}

export default Component;
