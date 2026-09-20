import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drr5y5ebc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drr5y5ebc"/>`,
		"fallback": "octicon:device-desktop-24",
	});
}

export default Component;
