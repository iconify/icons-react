import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmbl014od.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmbl014od"/>`,
		"fallback": "game-icons:battery-75",
	});
}

export default Component;
