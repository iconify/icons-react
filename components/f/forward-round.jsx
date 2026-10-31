import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrk0z1wmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrk0z1wmx"/>`,
		"fallback": "coolicons:forward-round",
	});
}

export default Component;
