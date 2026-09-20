import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s52z4mbek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s52z4mbek"/>`,
		"fallback": "streamline-block:basic-arrows-down-right",
	});
}

export default Component;
