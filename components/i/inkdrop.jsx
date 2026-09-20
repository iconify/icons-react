import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coz-zacrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coz-zacrm"/>`,
		"fallback": "thesvg:inkdrop",
	});
}

export default Component;
