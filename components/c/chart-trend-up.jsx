import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l15517bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l15517bfy"/>`,
		"fallback": "stash:chart-trend-up",
	});
}

export default Component;
