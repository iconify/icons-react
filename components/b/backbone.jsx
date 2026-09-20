import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7pkv8aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph7pkv8aq"/>`,
		"fallback": "thesvg-color:backbone",
	});
}

export default Component;
