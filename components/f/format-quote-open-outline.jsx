import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrlj9demd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrlj9demd"/>`,
		"fallback": "mdi:format-quote-open-outline",
	});
}

export default Component;
