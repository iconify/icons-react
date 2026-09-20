import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6hp64p8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6hp64p8u"/>`,
		"fallback": "streamline-ultimate:factory-building-1-bold",
	});
}

export default Component;
