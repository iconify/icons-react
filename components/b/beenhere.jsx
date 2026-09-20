import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urm4i36ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urm4i36ho"/>`,
		"fallback": "mdi:beenhere",
	});
}

export default Component;
