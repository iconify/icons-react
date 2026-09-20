import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg_zwb-4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg_zwb-4u"/>`,
		"fallback": "proicons:computer-mac",
	});
}

export default Component;
