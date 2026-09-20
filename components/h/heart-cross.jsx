import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr-v_wbjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr-v_wbjk"/>`,
		"fallback": "streamline-flex:heart-cross",
	});
}

export default Component;
