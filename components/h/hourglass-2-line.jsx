import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ric7uy4wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ric7uy4wd"/>`,
		"fallback": "ri:hourglass-2-line",
	});
}

export default Component;
