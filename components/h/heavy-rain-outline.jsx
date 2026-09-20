import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvxo8ft8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvxo8ft8w"/>`,
		"fallback": "lsicon:heavy-rain-outline",
	});
}

export default Component;
