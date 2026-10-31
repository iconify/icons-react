import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec08a_b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec08a_b1t"/>`,
		"fallback": "withicons:binoculars-gloss",
	});
}

export default Component;
