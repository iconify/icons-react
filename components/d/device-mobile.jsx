import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijd7q6vwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijd7q6vwi"/>`,
		"fallback": "tabler:device-mobile",
	});
}

export default Component;
