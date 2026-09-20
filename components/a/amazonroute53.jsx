import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlph9yu2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlph9yu2u"/>`,
		"fallback": "simple-icons:amazonroute53",
	});
}

export default Component;
