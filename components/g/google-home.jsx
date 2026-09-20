import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnk3igu_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnk3igu_d"/>`,
		"fallback": "thesvg:google-home",
	});
}

export default Component;
