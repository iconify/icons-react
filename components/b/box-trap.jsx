import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brsyw1b9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brsyw1b9z"/>`,
		"fallback": "game-icons:box-trap",
	});
}

export default Component;
