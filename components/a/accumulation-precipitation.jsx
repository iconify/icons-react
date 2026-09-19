import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq18vxb1u.css';
import '../../css/g/g7j88-bzv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq18vxb1u"/><path class="g7j88-bzv"/>`,
		"fallback": "carbon:accumulation-precipitation",
	});
}

export default Component;
