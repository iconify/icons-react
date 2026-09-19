import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6u974y3x.css';
import '../../css/a/a19ub-b_t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6u974y3x"/><path class="a19ub-b_t"/>`,
		"fallback": "gis:globe-share",
	});
}

export default Component;
