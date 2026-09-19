import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo-yisbud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo-yisbud"/>`,
		"fallback": "game-icons:checklist",
	});
}

export default Component;
