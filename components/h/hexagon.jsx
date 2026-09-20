import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s071-i2ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s071-i2ck"/>`,
		"fallback": "mdi-light:hexagon",
	});
}

export default Component;
