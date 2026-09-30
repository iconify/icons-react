import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlo555byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlo555byn"/>`,
		"fallback": "cbi:homey",
	});
}

export default Component;
