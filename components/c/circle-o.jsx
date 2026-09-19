import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcv25ub_g.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcv25ub_g"/>`,
		"fallback": "zmdi:circle-o",
	});
}

export default Component;
