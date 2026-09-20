import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da-7wgrhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da-7wgrhx"/>`,
		"fallback": "mdi:format-align-middle",
	});
}

export default Component;
