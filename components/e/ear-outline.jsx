import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgk3i7bfw.css';
import '../../css/g/g5jh10vug.css';
import '../../css/k/ko92zebxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgk3i7bfw"/><path class="g5jh10vug"/><path class="ko92zebxf"/>`,
		"fallback": "ion:ear-outline",
	});
}

export default Component;
