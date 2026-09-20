import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szfbq0a_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szfbq0a_t"/>`,
		"fallback": "mdi:format-align-left",
	});
}

export default Component;
