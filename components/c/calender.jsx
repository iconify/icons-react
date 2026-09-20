import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1p2s7bsm.css';
import '../../css/g/gb7xzgbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1p2s7bsm"/><path class="gb7xzgbil"/>`,
		"fallback": "uim:calender",
	});
}

export default Component;
