import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-o8_yu_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-o8_yu_f"/>`,
		"fallback": "mdi:format-align-justify",
	});
}

export default Component;
