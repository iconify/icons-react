import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giq6r0irk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giq6r0irk"/>`,
		"fallback": "typcn:battery-mid",
	});
}

export default Component;
