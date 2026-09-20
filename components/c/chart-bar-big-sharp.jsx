import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s752wwb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s752wwb0s"/>`,
		"fallback": "keyline-icons:chart-bar-big-sharp",
	});
}

export default Component;
