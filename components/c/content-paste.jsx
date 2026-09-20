import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjlcgh0pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjlcgh0pj"/>`,
		"fallback": "mdi:content-paste",
	});
}

export default Component;
