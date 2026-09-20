import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmesgm11x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmesgm11x"/>`,
		"fallback": "mdi:frequently-asked-questions",
	});
}

export default Component;
