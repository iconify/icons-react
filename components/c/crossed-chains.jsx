import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfrfi7yif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfrfi7yif"/>`,
		"fallback": "game-icons:crossed-chains",
	});
}

export default Component;
