import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryydanbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryydanbua"/>`,
		"fallback": "mingcute:burj-al-arab-line",
	});
}

export default Component;
