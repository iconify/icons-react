import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt6umrt6x.css';
import '../../css/p/p60zoqpev.css';
import '../../css/m/ma9vvmbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt6umrt6x"/><path class="p60zoqpev"/><path clip-rule="evenodd" class="ma9vvmbog"/>`,
		"fallback": "solar:cart-5-outline",
	});
}

export default Component;
