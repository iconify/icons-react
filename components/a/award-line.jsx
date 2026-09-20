import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo8g0tjqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo8g0tjqm"/>`,
		"fallback": "ri:award-line",
	});
}

export default Component;
