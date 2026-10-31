import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aea8_4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aea8_4biy"/>`,
		"fallback": "coolicons:face-surprised-round",
	});
}

export default Component;
