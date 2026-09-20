import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn2j6ebje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn2j6ebje"/>`,
		"fallback": "ri:home-5-fill",
	});
}

export default Component;
