import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m38t_g0lu.css';

const viewBox = {"width":344,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m38t_g0lu"/>`,
		"fallback": "zmdi:directions-subway",
	});
}

export default Component;
