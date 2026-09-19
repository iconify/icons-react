import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxijxzs2j.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxijxzs2j"/>`,
		"fallback": "zmdi:brightness-high",
	});
}

export default Component;
