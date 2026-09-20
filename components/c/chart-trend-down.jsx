import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg2x72bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg2x72bpu"/>`,
		"fallback": "stash:chart-trend-down",
	});
}

export default Component;
