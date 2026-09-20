import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvyhobc4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvyhobc4z"/>`,
		"fallback": "mdi:format-textbox",
	});
}

export default Component;
