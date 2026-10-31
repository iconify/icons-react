import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qitgpr0fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qitgpr0fk wm-k"/>`,
		"fallback": "withicons:bike-gloss",
	});
}

export default Component;
