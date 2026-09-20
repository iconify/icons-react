import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmns8ghnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmns8ghnb"/>`,
		"fallback": "thesvg-color:anichart",
	});
}

export default Component;
