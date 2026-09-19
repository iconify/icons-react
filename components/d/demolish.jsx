import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0fd5zmno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0fd5zmno"/>`,
		"fallback": "game-icons:demolish",
	});
}

export default Component;
