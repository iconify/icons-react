import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb7_l_nwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb7_l_nwm"/>`,
		"fallback": "thesvg-color:ds-automobiles",
	});
}

export default Component;
