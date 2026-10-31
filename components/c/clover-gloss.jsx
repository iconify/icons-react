import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlka2hb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlka2hb1t"/>`,
		"fallback": "withicons:clover-gloss",
	});
}

export default Component;
