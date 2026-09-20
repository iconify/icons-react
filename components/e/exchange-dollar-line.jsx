import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fakd8v0-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fakd8v0-a"/>`,
		"fallback": "ri:exchange-dollar-line",
	});
}

export default Component;
