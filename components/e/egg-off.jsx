import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru3v4xl0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru3v4xl0x"/>`,
		"fallback": "mdi:egg-off",
	});
}

export default Component;
