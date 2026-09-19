import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrgy8szvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrgy8szvx"/>`,
		"fallback": "game-icons:convict",
	});
}

export default Component;
