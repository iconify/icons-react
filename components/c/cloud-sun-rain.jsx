import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkwg2476l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkwg2476l"/>`,
		"fallback": "mynaui:cloud-sun-rain",
	});
}

export default Component;
