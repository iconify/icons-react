import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhf6mbgl.css';
import '../../css/d/d72ifg1in.css';
import '../../css/k/ko92zebxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhf6mbgl"/><path class="d72ifg1in"/><path class="ko92zebxf"/>`,
		"fallback": "ion:ear-outline",
	});
}

export default Component;
