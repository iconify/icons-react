import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjz47zb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjz47zb1d"/>`,
		"fallback": "game-icons:full-wood-bucket",
	});
}

export default Component;
