import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmlu_gbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmlu_gbln"/>`,
		"fallback": "withicons:columns-3-gloss",
	});
}

export default Component;
