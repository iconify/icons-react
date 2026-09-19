import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2dyvbm_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2dyvbm_m"/>`,
		"fallback": "bx:bxs-ambulance",
	});
}

export default Component;
