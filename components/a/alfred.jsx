import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh98j-4dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh98j-4dt"/>`,
		"fallback": "thesvg-color:alfred",
	});
}

export default Component;
