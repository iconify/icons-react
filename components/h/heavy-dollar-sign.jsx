import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8jxl3bzb.css';
import '../../css/b/bqmve1p5d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8jxl3bzb"/><path class="bqmve1p5d"/>`,
		"fallback": "openmoji:heavy-dollar-sign",
	});
}

export default Component;
