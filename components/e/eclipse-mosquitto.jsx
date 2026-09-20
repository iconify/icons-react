import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqvl_23_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqvl_23_l"/>`,
		"fallback": "thesvg-color:eclipse-mosquitto",
	});
}

export default Component;
