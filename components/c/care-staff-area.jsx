import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqek1wu7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqek1wu7r"/>`,
		"fallback": "guidance:care-staff-area",
	});
}

export default Component;
