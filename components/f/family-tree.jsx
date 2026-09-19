import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnu_wrw5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnu_wrw5d"/>`,
		"fallback": "game-icons:family-tree",
	});
}

export default Component;
