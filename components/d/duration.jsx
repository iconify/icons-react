import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl9kmyrwu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl9kmyrwu"/>`,
		"fallback": "game-icons:duration",
	});
}

export default Component;
