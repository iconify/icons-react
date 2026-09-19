import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoc97ab0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoc97ab0k"/>`,
		"fallback": "boxicons:between-vertical-start",
	});
}

export default Component;
