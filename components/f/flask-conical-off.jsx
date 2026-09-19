import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmac4rbla.css';
import '../../css/u/uog4vzbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kmac4rbla"/><path class="uog4vzbuc"/></g>`,
		"fallback": "hugeicons:flask-conical-off",
	});
}

export default Component;
