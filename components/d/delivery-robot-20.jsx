import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuoz_bcaq.css';
import '../../css/g/gavnn00vr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuoz_bcaq"/><path class="gavnn00vr"/>`,
		"fallback": "energy-icons:delivery-robot-20",
	});
}

export default Component;
