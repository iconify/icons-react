import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0fxzdw3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0fxzdw3s"/>`,
		"fallback": "game-icons:charm",
	});
}

export default Component;
