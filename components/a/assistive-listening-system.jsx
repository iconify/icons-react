import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3l1kjaet.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3l1kjaet"/>`,
		"fallback": "map:assistive-listening-system",
	});
}

export default Component;
