import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjy23_bwm.css';
import '../../css/e/ex-8_4bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjy23_bwm"/><path class="ex-8_4bzp"/>`,
		"fallback": "energy-icons:fox-20-bold",
	});
}

export default Component;
