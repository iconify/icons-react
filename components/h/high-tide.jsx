import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieo3-je4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieo3-je4y"/>`,
		"fallback": "game-icons:high-tide",
	});
}

export default Component;
