import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1ryztnrd.css';
import '../../css/n/n6zdheb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1ryztnrd"/><path clip-rule="evenodd" class="n6zdheb6y"/>`,
		"fallback": "si:align-right-detailed-fill",
	});
}

export default Component;
