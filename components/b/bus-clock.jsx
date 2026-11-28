import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufw7ugvlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufw7ugvlk"/>`,
		"fallback": "noviair-light:bus-clock",
	});
}

export default Component;
