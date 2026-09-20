import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9qtfr36x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9qtfr36x"/>`,
		"fallback": "mynaui:filter-solid",
	});
}

export default Component;
