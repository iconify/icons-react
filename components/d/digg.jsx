import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rog9c546b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rog9c546b"/>`,
		"fallback": "pixel:digg",
	});
}

export default Component;
