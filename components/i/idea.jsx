import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf0gxib2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf0gxib2s"/>`,
		"fallback": "game-icons:idea",
	});
}

export default Component;
