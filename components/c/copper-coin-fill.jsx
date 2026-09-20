import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gozyvab6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gozyvab6b"/>`,
		"fallback": "ri:copper-coin-fill",
	});
}

export default Component;
