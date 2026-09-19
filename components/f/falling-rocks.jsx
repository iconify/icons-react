import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1u3g-62o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1u3g-62o"/>`,
		"fallback": "game-icons:falling-rocks",
	});
}

export default Component;
