import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5bh-rbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5bh-rbws"/>`,
		"fallback": "mdi:air-conditioning-off",
	});
}

export default Component;
