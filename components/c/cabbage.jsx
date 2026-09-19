import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8au5_4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8au5_4w"/>`,
		"fallback": "game-icons:cabbage",
	});
}

export default Component;
