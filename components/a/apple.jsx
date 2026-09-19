import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj3-q5xdo.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj3-q5xdo"/>`,
		"fallback": "zmdi:apple",
	});
}

export default Component;
