import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdziatdzg.css';
import '../../css/r/r_w95gdro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdziatdzg"/><path class="r_w95gdro"/>`,
		"fallback": "boxicons:arrow-in-down-stroke-circle-half",
	});
}

export default Component;
