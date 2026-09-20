import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8xv77byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8xv77byg"/>`,
		"fallback": "reicon:direct-up-filled",
	});
}

export default Component;
