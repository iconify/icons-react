import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pct_djbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pct_djbqf"/>`,
		"fallback": "ri:copper-diamond-fill",
	});
}

export default Component;
