import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp5_a1qwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp5_a1qwc"/>`,
		"fallback": "carbon:data-diode",
	});
}

export default Component;
