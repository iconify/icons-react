import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oi6d-5_ph.css';
import '../../css/f/ftbh39b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="oi6d-5_ph"/><path class="ftbh39b-k"/></g>`,
		"fallback": "hugeicons:egg-fried",
	});
}

export default Component;
