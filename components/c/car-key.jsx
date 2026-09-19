import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn3x2lbne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn3x2lbne"/>`,
		"fallback": "game-icons:car-key",
	});
}

export default Component;
