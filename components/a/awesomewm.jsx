import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw_7s7aau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw_7s7aau"/>`,
		"fallback": "simple-icons:awesomewm",
	});
}

export default Component;
