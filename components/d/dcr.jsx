import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scih79b8c.css';
import '../../css/m/me4-nbcbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scih79b8c"/><path class="me4-nbcbb"/>`,
		"fallback": "token:dcr",
	});
}

export default Component;
