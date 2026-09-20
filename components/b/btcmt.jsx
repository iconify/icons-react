import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy96p8bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy96p8bdi"/>`,
		"fallback": "token:btcmt",
	});
}

export default Component;
