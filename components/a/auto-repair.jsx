import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz84-d1xh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz84-d1xh"/>`,
		"fallback": "game-icons:auto-repair",
	});
}

export default Component;
