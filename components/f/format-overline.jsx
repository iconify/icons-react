import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/objpm4zrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="objpm4zrx"/>`,
		"fallback": "mdi:format-overline",
	});
}

export default Component;
