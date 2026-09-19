import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btw2aqb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btw2aqb0g"/>`,
		"fallback": "flowbite:desktop-pc-outline",
	});
}

export default Component;
