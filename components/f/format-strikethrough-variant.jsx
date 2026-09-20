import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbw78gb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbw78gb8f"/>`,
		"fallback": "mdi:format-strikethrough-variant",
	});
}

export default Component;
