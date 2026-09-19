import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iub6988rl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iub6988rl"/>`,
		"fallback": "fa-solid:dot-circle",
	});
}

export default Component;
