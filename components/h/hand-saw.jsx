import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mem9ylb-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mem9ylb-x"/>`,
		"fallback": "game-icons:hand-saw",
	});
}

export default Component;
