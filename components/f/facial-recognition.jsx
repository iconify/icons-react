import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz7umfcws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz7umfcws"/>`,
		"fallback": "mdi:facial-recognition",
	});
}

export default Component;
