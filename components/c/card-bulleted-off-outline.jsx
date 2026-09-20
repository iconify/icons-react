import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk_ay_n2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk_ay_n2o"/>`,
		"fallback": "mdi:card-bulleted-off-outline",
	});
}

export default Component;
