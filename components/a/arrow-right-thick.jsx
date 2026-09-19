import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj02-s9_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj02-s9_l"/>`,
		"fallback": "akar-icons:arrow-right-thick",
	});
}

export default Component;
